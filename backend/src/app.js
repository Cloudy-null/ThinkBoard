import express from 'express';
import notesRouter from './routes/notes.routes.js';
import { connectDB } from './config/db.js';
import { PORT } from './config/env.js';

const app = express();

connectDB(); 

app.use('/api/notes', notesRouter);
 

app.listen(PORT, ()=>{
    console.log(`Subtracker server started! click here => http://localhost:${PORT}`)  
});  