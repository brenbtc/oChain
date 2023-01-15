import axios from "axios";

// Sign Up \\
export async function signUp(formData) {
  const { data } = await axios.post(
    'user/signup',
    formData
  )
  return data;
}


export async function accountLogin(formData) {
  const { data } = await axios.post(
    'user/login',
    formData
  )
  return data
}