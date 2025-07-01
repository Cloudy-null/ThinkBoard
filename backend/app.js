import express from 'express';

const app = express();
const PORT = 5001

app.get('/api/notes', (req,res) => {
    res.status(200);
    res.json({message: 'fetched boi'})
});

app.post('/api/notes', (req,res) => {
    res.status(201);
    res.json({message: 'created boi'})
});

app.put('/api/notes', (req,res) => {
    res.status(200);
    res.json({message: 'updated boi'})
});

app.delete('/api/notes', (req,res) => {
    res.status(200);
    res.json({message: 'deleted boi'})
});

app.listen(PORT, ()=>{
    console.log(`Subtracker server started! click here => http://localhost:${PORT}`)
});