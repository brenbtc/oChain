import axios from "axios";

const config = {
  headers: {
      'Authorization': localStorage.getItem('token')
  }
}

// Sign Up \\
export async function signUp(formData) {
  const { data } = await axios.post(
    "http://localhost:5000/user/signup",
    formData,
  )
  return data;
}

// Login \\
export async function accountLogin(formData) {
  const { data } = await axios.post(
    "http://localhost:5000/user/login",
    formData,
    config
  )
  return data
}

// Create Note \\
export async function createNote(formData) {
  const { data } = await axios.post(
    "http://localhost:5000/note/",formData, config)
    return data
}

// Token Show \\
export async function getToken() {
  const { data } = await axios.get('http://localhost:5000/user/token', config)
  return data
}



// Show Note \\
export async function showNote(){
  const { data } = await axios.get("http://localhost:5000/note")
  return data
}



// Update/Edit Note \\
export async function updateNote(note) {
  const { data } = await axios.put(`http://localhost:5000/note/${note._id}`, note, config)
  return data
}

// Delete Note \\
export async function deleteNote(_id) 
{
  await axios.delete(`http://localhost:5000/note/${_id}`, config)
}