import mongoose from 'mongoose';
import { DB_URL } from './env.js';

export async function connectDB () {
    try {
        await mongoose.connect(DB_URL)
        console.log("CONNECTED TO DB: TRUE!!!!")
    } catch(error) {
        console.log('Error connecting to database')
        process.exit(1) // exit with failure
    }
};