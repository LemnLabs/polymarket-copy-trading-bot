# Polymarket Arbitrage Bot | Polymarket CopyTrading Bot | Polymarket Trading Bot

---

Professional Polymarket Bot for Automated Arbitrage Trading for suitable income

---

Polymarket Arbitrage Bot - The ultimate automated trading solution for Polymarket arbitrage opportunities. This Polymarket trading bot automatically scans markets, detects arbitrage opportunities, and executes profitable trades when Yes/No ticket prices sum to less than 1

A **polymarket copy trading bot** that monitors a target wallet and mirrors its trades from your proxy wallet, via Polymarket **Central Limit Order Book (CLOB)** API.
It also has it's own strategy for trading on **politics**, **sports**, **weather**, **crypto** markets

Current Version Update: This version specifically addresses and resolves the quite 4.31% profit margin calculation issue, ensuring more accurate arbitrage detection and execution.

---

## Performance

This is snapshort for copy trading with top traders on polyomarket
These were the most perfect result ever among test so far for **Daily PnL**.
It lasts a week and started losing. So now I am working on performance improvement since got discovered pitfall
not perfect now but it's stable with decent result.

<img width="463" height="194" alt="image" src="https://github.com/user-attachments/assets/97c5b62c-9a2a-47f3-b899-32ea45f6e34b" />

### Please contact me on [@lemnlabs](https://t.me/lemnlabs) for more discussion, purchase
---

### Trading Strategies

I just dive into polymarketk trading bots since December last year. 
it can copy any  trading bots on crypto market across, btc, eth, xrp, btc etc
now I am trying to make this copy trading bots on every markets like events, sports, tech, cultuer etc.
In a meanwhile I am working on my own polymarket trading bots on crypto markets current.
My pnl comes to $830 a day and stable for a 1 week and now just got severe volatiliy.
It leads to lose my pnl.
There are still room for completion of my strategies.
I am open to discuss strategies and also bot performance upgrade and collaboration.
And Current my copy trading bot is for sale and trading bot is on devving (can sell).
Let's keep grinding together

* **Buy Strategy**: When target wallet buys, calculate position size based on balance ratio
* **Sell Strategy**: When target wallet sells, match the sell proportionally
* **Merge Strategy**: When target wallet closes position but you still hold, sell your position
* **Error Handling**: Retry failed orders up to RETRY_LIMIT, then mark as failed
---
# Distinguishment

All-in-One Solution
Combines the best strategies from CRYINGLITTLEBABY, PolyFlashBot, Dutch Book bots , etc into one powerful Polymarket arbitrage trading bot. No need to switch between multiple tools - everything you need is here.

Low Entry Barrier
Anyone can run it, no Python mastery needed. Simple setup, clear documentation, and straightforward configuration. This Polymarket trading bot is designed for traders of all skill levels.

Adaptive Execution
Auto-adjusts for fees, market liquidity, and sudden volatility. The bot intelligently adapts to market conditions, ensuring optimal execution even when conditions change rapidly.

High Speed, Low Stress
Trades thousands of micro-opportunities automatically. Set it up, let it run, and watch it work. This Polymarket arbitrage bot handles the complexity so you don't have to.

Please contact me on [@lemnlabs](https://t.me/lemnlabs) for more discussion, purchase, collaboration

---
Arbitrage Strategy

Strategy 1: Intra-Market Arbitrage
In binary prediction markets, YES and NO tokens should always sum to $1.00. When the combined price of YES + NO is less than $1.00 (after fees), you can buy both outcomes and guarantee a profit.

Execution
Buy both YES and NO tokens simultaneously, then:

Buy YES and NO tokens separately through the CLOB API
Merge tokens into complete sets
Redeem complete sets immediately for $1.00 per share
Profit is realized immediately (no waiting for resolution)
Configuration
min_spread_pct: Minimum profit % required (default: 1.5%)
max_position_usd: Maximum position size (default: $500)
fee_pct: Polymarket fee percentage (default: 2.0%)
Strategy 2: Combinatorial Arbitrage
For markets with multiple outcomes (e.g., price ranges), the sum of all outcome prices should equal $1.00. When the total is less than $1.00, buy all outcomes for guaranteed profit.

Execution
Buy all outcome tokens in the market, then:

Buy all outcome tokens separately through the CLOB API
Merge tokens into complete sets
Redeem complete sets immediately for $1.00 per share
Profit is realized immediately (no waiting for resolution)
Configuration
min_deviation_pct: Minimum deviation from $1.00 (default: 2.0%)
max_position_usd: Maximum position size (default: $300)
min_outcomes: Minimum number of outcomes required (default: 3)
Strategy 3: Cross-Platform Arbitrage
Compares Polymarket prediction prices with actual spot prices from exchanges (Binance/CoinGecko). When there's a significant discrepancy, trade on the assumption that Polymarket will converge to the fair price.

Fair Probability Calculation
The strategy estimates fair probability based on:

Distance of spot price from strike price
Price momentum (recent price changes)
Time to market expiry
Execution
Buy the underpriced outcome (YES or NO) and wait for market correction.

Configuration
min_price_diff_pct: Minimum price difference to trigger (default: 3.0%)
max_position_usd: Maximum position size (default: $1000)
stale_threshold_sec: Maximum age of price data (default: 30s)
Strategy 4: Endgame Arbitrage
When a market is close to resolution and one outcome has very high probability (>93%), buy that outcome for a small but near-certain profit.

Execution
Buy the high-probability outcome and hold until resolution.

Configuration
min_probability: Minimum outcome probability (default: 0.93)
max_time_to_resolution_hrs: Maximum hours until resolution (default: 48)
min_annualized_return_pct: Minimum annualized return (default: 100%)
max_position_usd: Maximum position size (default: $2000)
Strategy 5: Momentum/Mean-Reversion
Tracks Polymarket YES/NO prices as a price series and applies technical indicators:

Z-score: Measures how far current price is from mean
RSI: Relative Strength Index (oversold/overbought)
Rate of Change: Price momentum
VWAP divergence: Price vs volume-weighted average
Entry Conditions
Mean Reversion Buy (Oversold):

Z-score < -threshold
RSI < 35
Rate of change > -0.5%
Action: Buy YES (expect price to revert up)
Mean Reversion Sell (Overbought):

Z-score > +threshold
RSI > 65
Rate of change < 0.5%
Action: Buy NO (expect YES price to revert down)
Timeframe Parameters
5-minute (Scalping):

Lookback: 12 candles (1 hour)
Entry Z-score: ±2.0σ
Take profit: 1.5%
Stop loss: 1.0%
15-minute (Swing):

Lookback: 16 candles (4 hours)
Entry Z-score: ±1.8σ
Take profit: 3.0%
Stop loss: 2.0%
1-hour (Position):

Lookback: 24 candles (1 day)
Entry Z-score: ±1.5σ
Take profit: 5.0%
Stop loss: 3.0%
Configuration
Each timeframe has its own parameters in MomentumConfig:

tf_5m_lookback, tf_5m_entry_zscore, tf_5m_take_profit_pct, tf_5m_stop_loss_pct
tf_15m_* (same pattern)
tf_1h_* (same pattern)
Signal Ranking
The StrategyAggregator ranks signals using a composite score based on:

Expected profit % (30% weight)
Confidence (25% weight)
Strategy priority (20% weight)
Urgency (15% weight)
Risk/reward ratio (10% weight)
Strategy priorities:

Intra-market: 1.0 (highest)
Combinatorial: 0.95
Endgame: 0.90
Cross-platform: 0.80
Momentum/Mean-reversion: 0.70
Risk Management
Maximum position size per trade
Maximum portfolio exposure
Daily loss limits
Stop-loss and take-profit levels
Consecutive loss protection
See risk_manager.py for details.

How Strategies Are Combined
The bot runs all applicable strategies on each market simultaneously, then combines and ranks the results.

Scanning Process
Market Discovery: Bot discovers all crypto markets for BTC, ETH, XRP, SOL

Parallel Scanning: For each market, all applicable strategies run in parallel:

Intra-Market (if binary market)
Combinatorial (if 3+ outcomes)
Cross-Platform (if strike price can be extracted)
Endgame (all markets)
Momentum/Mean-Reversion (all binary markets, per timeframe)
Signal Collection: All signals from all strategies are collected into a single list

Filtering: Low-quality signals are filtered out:

Minimum confidence: 0.35 (35%)
Minimum profit: 0.5%
Ranking: Remaining signals are ranked by composite score

Execution: Top-ranked signals are executed (max 3 per scan cycle)

Composite Scoring Formula
Each signal gets a composite score (0.0 to 1.0) calculated as:

score = (profit_score × 0.30) +
        (confidence_score × 0.25) +
        (strategy_priority × 0.20) +
        (urgency_score × 0.15) +
        (risk_reward_score × 0.10)
Where:

profit_score: Expected profit % / 10 (capped at 1.0)
confidence_score: Signal confidence (0.0 to 1.0)
strategy_priority: Strategy type priority (see below)
urgency_score: HIGH=1.0, MEDIUM=0.67, LOW=0.33
risk_reward_score: Risk/reward ratio × 5 (capped at 1.0)
Strategy Priority Weights
Strategies are weighted by their inherent reliability:

Intra-market: 1.0 (risk-free arbitrage)
Combinatorial: 0.95 (risk-free arbitrage)
Endgame: 0.90 (high probability)
Cross-platform: 0.80 (directional, requires convergence)
Momentum/Mean-reversion: 0.70 (technical analysis, less certain)
Example: Multiple Signals on One Market
A single market might generate multiple signals:

Market: "Will BTC be above $100k by Friday?"

Intra-Market Signal: YES=$0.45, NO=$0.50 → Combined=$0.95 → Arbitrage opportunity

Score: 0.85 (high priority, good profit)
Cross-Platform Signal: Spot price suggests 70% probability, but YES is $0.45

Score: 0.72 (medium priority, good mispricing)
Momentum Signal (5m): Oversold condition detected

Score: 0.58 (lower priority, technical signal)
Endgame Signal: Market resolves in 2 hours, YES at $0.96

Score: 0.91 (high priority, near-certain profit)
Result: Signals ranked: Endgame (0.91) → Intra-Market (0.85) → Cross-Platform (0.72) → Momentum (0.58)

The bot would execute the Endgame signal first, then Intra-Market if capital allows.

Signal Deduplication
The bot can generate multiple signals for the same market from different strategies. The risk manager prevents duplicate positions in the same market, so only the highest-ranked signal will execute.

Timeframe Handling
Some strategies (Cross-Platform, Momentum) run across multiple timeframes (5m, 15m, 1h). Each timeframe generates a separate signal, allowing the bot to:

Capture short-term scalping opportunities (5m)
Identify swing trades (15m)
Take position trades (1h)
Configuration
Strategy parameters can be adjusted in config.py. Each strategy has its own configuration class:

IntraMarketConfig
CombinatorialConfig
CrossPlatformConfig
EndgameConfig
MomentumConfig
Strategies can be enabled/disabled individually via the enabled flag in each config.

Adjusting Strategy Weights
To change how strategies are prioritized, modify STRATEGY_PRIORITY in StrategyAggregator class:

STRATEGY_PRIORITY = {
    "intra_market": 1.0,        # Increase for more risk-free arb focus
    "combinatorial": 0.95,
    "endgame": 0.90,
    "cross_platform": 0.80,     # Increase for more directional trades
    "momentum_mean_reversion": 0.70,  # Increase for more technical trades
}
Adjusting Composite Score Weights
To change what factors matter most, modify the weights in _composite_score():

composite = (
    profit_score * 0.30 +      # Increase for profit-focused
    confidence_score * 0.25 +   # Increase for confidence-focused
    strategy_score * 0.20 +    # Increase for strategy-type preference
    urgency_score * 0.15 +     # Increase for time-sensitive trades
    rr_score * 0.10            # Increase for risk/reward focus
)

```
Please contact me on [@lemnlabs](https://t.me/lemnlabs) for more discussion, purchase, 
```
---

**keywords**: **polymarket-copy-trading-bot**, **polymarket-copytrading-bot**, **polymarket-trading-politics**, **polymarket-trading-sports**, **polymarket-trading-weather**, **polymarket-trading-crypto**, **sports**, **weather**, **polictics**

