import express from 'express';
import notesRouter from './routes/notes.routes.js';

const app = express();
const PORT = 5001

app.use('/api/notes', notesRouter);
 

app.listen(PORT, ()=>{
    console.log(`Subtracker server started! click here => http://localhost:${PORT}`)
});  