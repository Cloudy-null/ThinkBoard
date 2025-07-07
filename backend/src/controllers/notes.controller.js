import Note from "../models/notes.model.js";


export async function getAllNotes(req,res) {
    try{
        const notes = await Note.find().sort({createdAt: -1}); // -1 means newest first !!
        res.status(200);
        res.json(notes);
    } catch(e) {
        console.error('Error in getAllNotes', e);
        res.status(500);
        res.json({message: 'Internal server error'})
    };
};

export async function getNote(req,res) {
    try
    {
    const note = await Note.findById(req.params.id);

    if(!note){
        res.status(404);
        res.json({message:'Note not found !!'});
        return res;
    }

    res.status(200);
    res.json(note)
    }
    catch(e){
        console.error('Error in findNote', e);
        res.status(500);
        res.json({message: 'Internal server error'}) 
    }
    
};

export async function createNote(req,res) {
    try{
        const {title, content} = req.body;
        const newNote = new Note({title, content});

        await newNote.save();
        res.status(201);
        res.json({message: 'Note created !!'});
    }catch(e){
        console.error('Error in createNote', e);
        res.status(500);
        res.json({message: 'Internal server error'}) 
    }
};

export async function updateNote(req,res) {
    try{
        const{title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content,},{new:true,});

        if(!updatedNote){
            res.status(404);
            res.json({message:'Note not found !!'});
            return res;
        } 
        
        res.status(200);
        res.json(updatedNote);

    }catch(e){
        console.error('Error in updateNote', e);
        res.status(500);
        res.json({message: 'Internal server error'}); 
    }
};

export async function deleteNote(req,res) {
        try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if(!deletedNote){
            res.status(404);
            res.json({message:'Note not found !!'});
            return res;
        } 
        
        res.status(200);
        res.json({message:'Note deleted !!'});

    }catch(e){
        console.error('Error in deleteNote', e);
        res.status(500);
        res.json({message: 'Internal server error'}) 
    }
};
