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
        try {
            accountLogin(formState)
            .then((res) => {
                console.log(res)
                if(res.status!==401){
              
                        localStorage.token = res.token;
                        props.setLoggedIn(true);
                        props.setUser(res.user);
                        
                    navigate('/')
                }
            }
            )
        } catch (error) {
            console.log(error)
        }
 
        
    }
   


    return (
        <main className='row'>
            <div className='col'>
                <div className='card'>
                    <div className='card-action'>
                    <h4 className='login-title'><strong>Login</strong></h4>
                    </div>
                        <form onSubmit={handleSubmit}>
                            <div className='card-content'>
                                <label htmlFor='username'>Username: </label>
                                    <input 
                                    type='text'
                                    name='username'
                                    onChange={handleChange}
                                    className='validate'
                                    value={formState.username}
                                    />
                            </div>
                            <div className='card-content'>
                                <label htmlFor='password'>Password:  </label>
                                    <input
                                    type='text'
                                    name='password'
                                    onChange={handleChange}
                                    className='validate'
                                    value={formState.password}
                                    />
                            </div>
                                <button type='submit' className='signup-btn btn waves-effect '>Login</button>
                        </form> 
                </div>
            </div>
        </main>
    )
}

export default Login