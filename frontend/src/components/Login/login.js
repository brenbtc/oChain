import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {accountLogin } from '../../utils/api'



import './login.css'

const theme = createTheme();

function Login(props) {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    })
    
    const handleChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        accountLogin(formState)
        .then((data) => {
            localStorage.token = data.token;
            props.setLoggedIn(true)
            props.setUser(data.user)
            console.log(data.user)
        })
        navigate('/')
    }
   


    return (
        <div className='loginContainer'>
        


            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username: </label>
                    <input 
                    type='text'
                    name='username'
                    onChange={handleChange}
                    value={formState.username}
                    />

                <label htmlFor='password'>Password:</label>
                    <input
                    type='text'
                    name='password'
                    onChange={handleChange}
                    value={formState.password}
                    />

                <button type='submit'>Login</button>
            </form> 
            
        </div>
    )
}

export default Login