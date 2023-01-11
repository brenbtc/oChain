const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema(
    {
       noteId: {
           type: Number,
           required: true 
       },

       title: {
        type: String,
        required: true
       },

       body: {
        type: String,
        required: true
       }

   }
);

const Note = mongoose.model('User', noteSchema);
module.exports = Note;
