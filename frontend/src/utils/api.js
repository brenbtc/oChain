import axios from "axios";
//create a note
export async function createNote(formData) {
console.log(formData)
const { data } = await axios.post( "http://localhost:5000/Note",formData);
      return data;
 }
 //show a note 
 export async function showNote() {
    const { data } = await axios.get("http://localhost:5000/note");
    return data;
  }