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
        navigate('/')
    }

    return (
        <main className='row'>
            <div className='col'>
                <div className='card'>
                    <div className='card-action'>
                        <h4 className='signup-title'><strong>SignUp</strong></h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='card-content'>
                            <label htmlFor='username'>Username</label>
                            <input 
                            type='text' 
                            name='username'
                            value={formState.username}
                            onChange={handleChange}
                            className='validate'
                            required
                            />
                        </div>
                        <div className='card-content'>
                            <label>Password</label>
                            <input 
                            type='text' 
                            name='password'
                            value={formState.password}
                            onChange={handleChange}
                            className='validate'
                            required
                            />
                        </div>
                        <button type='submit' className='signup-btn btn waves-effect '>Sign up</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Signup