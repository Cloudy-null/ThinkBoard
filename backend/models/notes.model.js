import mongoose from "mongoose";

// 1- create a schema 
// 2- model based off of that schema 

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true,'Title is required !!'],
    },
    content: {
        type: String,
        required: [true,'Cant have an empty note !!'],
    },
},
{timestamps: true} // createdAt, updateAt
);

const Note = mongoose.model('Note', noteSchema);

export default Note;
