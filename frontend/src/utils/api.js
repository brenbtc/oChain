import axios from "axios";

// Sign Up \\
export async function signUp(formData) {
  const { data } = await axios.post(
    "http://localhost:5000/user/signup",
    formData
  )
  return data;
}

// Login \\
export async function accountLogin(formData) {
  const { data } = await axios.post(
    "http://localhost:5000/user/login",
    formData
  )
  return data
}