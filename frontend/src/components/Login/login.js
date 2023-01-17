


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {accountLogin } from '../../utils/api'



import './login.css'


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
                <div className=''>
                    <label htmlFor='username'>Username: </label>
                        <input 
                        type='text'
                        name='username'
                        onChange={handleChange}
                        className='browser-default'
                        placeholder='Username'
                        value={formState.username}
                        />
                </div>
                <div>
                    <label htmlFor='password'>Password:  </label>
                        <input
                        type='text'
                        name='password'
                        onChange={handleChange}
                        className='browser-default'
                        placeholder='Password'
                        value={formState.password}
                        />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form> 
            
        </div>
    )
}

export default Login