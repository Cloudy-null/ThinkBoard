import express from 'express';
import notesRouter from './routes/notes.routes.js';
import { connectDB } from './config/db.js';
import { PORT } from './config/env.js';
import rateLimiter from './middlewares/ratelimiter.js';

const app = express();

app.use(express.json());
app.use(rateLimiter)

app.use('/api/notes', notesRouter);
 
connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Subtracker server started! click here => http://localhost:${PORT}`)  
});
});  