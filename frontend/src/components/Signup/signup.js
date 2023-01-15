import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../utils/api';

import './signup.css'


function Signup(props) {

    const navigate = useNavigate();
    const initialState = {
        username: '',
        password: '',
    }
    const [formState, setFormState] = useState(initialState);


    const handleChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp(formState)
        .then((data) => {
            localStorage.token = data.token;
            props.setLoggedIn(true)
            props.setUser(data.user)
        })
        navigate('/login')
    }

    return (
        <div>
            <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input 
                    type='text' 
                    name='username'
                    value={formState.username}
                    onChange={handleChange}
                    required
                    />

                    <label>Password</label>
                    <input 
                    type='text' 
                    name='password'
                    value={formState.password}
                    onChange={handleChange}
                    required
                    />

                    <button type='submit'>Sign up</button>
                </form>
        </div>
    )
}

export default Signup