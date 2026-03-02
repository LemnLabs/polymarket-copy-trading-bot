import { ENV } from '../config/env';
import { UserActivityInterface, UserPositionInterface } from '../interfaces/User';
import { getUserActivityModel, getUserPositionModel } from '../models/userHistory';
import fetchData from '../utils/fetchData';

const USER_ADDRESS = ENV.USER_ADDRESS;
const TOO_OLD_TIMESTAMP = ENV.TOO_OLD_TIMESTAMP;
const FETCH_INTERVAL = ENV.FETCH_INTERVAL;

if (!USER_ADDRESS) {
    throw new Error('USER_ADDRESS is not defined');
    console.log('USER_ADDRESS is not defined');
}

const UserActivity = getUserActivityModel(USER_ADDRESS);
const UserPosition = getUserPositionModel(USER_ADDRESS);

let temp_trades: UserActivityInterface[] = [];

const init = async () => {
    const trades = await UserActivity.find().exec();
    temp_trades = trades.map((trade) => trade as UserActivityInterface);
    console.log('temp_trades', temp_trades);
};

const fetchTradeData = async () => {
    try {
        const activities_raw = await fetchData(
            `https://data-api.polymarket.com/activities?user=${USER_ADDRESS}`
        );
        if (!Array.isArray(activities_raw) || activities_raw.length === 0) return;

        const trades = activities_raw.filter((a) => a.type === 'TRADE') as UserActivityInterface[];
        const existingDocs = await UserActivity.find({}, { transactionHash: 1 }).exec();
        const existingHashes = new Set(
            existingDocs.map((d: { transactionHash?: string | null }) => d.transactionHash).filter(Boolean) as string[]
        );
        const cutoff = Date.now() - TOO_OLD_TIMESTAMP * 60 * 60 * 1000;

        const newTrades = trades.filter((t) => !existingHashes.has(t.transactionHash) && t.timestamp >= cutoff);
        for (const trade of newTrades) {
            await UserActivity.create({
                ...trade,
                proxyWallet: USER_ADDRESS,
                bot: false,
                botExcutedTime: 0,
            });
            console.log('new trade', trade.transactionHash);
        }
    } catch (err) {
        console.error('fetch trades', err);
    }
};

const tradeMonitor = async () => {
    await init();
    while (true) {
        await fetchTradeData();
        await new Promise((r) => setTimeout(r, FETCH_INTERVAL * 1000));
    }
};

export default tradeMonitor;
