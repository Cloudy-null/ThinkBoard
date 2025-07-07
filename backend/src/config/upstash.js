import {Ratelimit} from '@upstash/ratelimit';
import { Redis } from '@upstash/redis'
import { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } from './env.js';

const redis = new Redis({
  url: UPSTASH_REDIS_REST_URL,
  token: UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(10,'20 s')
});

export default ratelimit;