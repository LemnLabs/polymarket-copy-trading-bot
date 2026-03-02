import axios from 'axios';

const fetchData = async (url: string, retries = 3, delay = 2000) => {
    for (let i = 1; i <= retries; i++) {
        try {
            const res = await axios.get(url, {
                timeout: 10000,
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
            });
            return res.data;
        } catch (err: unknown) {
            const code = (err as { code?: string })?.code;
            const msg = (err as { message?: string })?.message || String(err);
            if (i === retries) return [];
            if (code === 'ETIMEDOUT' || code === 'ECONNABORTED' || code === 'ECONNREFUSED' || code === 'ENOTFOUND') {
                await new Promise((r) => setTimeout(r, delay));
                delay *= 1.5;
            } else {
                return [];
            }
        }
    }
    return [];
};

export default fetchData;
