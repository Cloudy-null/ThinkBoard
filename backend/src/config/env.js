import { config } from 'dotenv';

config({path:'.env'});

export const {
    PORT, 
    DB_URL,
    UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN,
} = process.env;