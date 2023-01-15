import './login.css'

function Login() {

    

    return (
        <div>
        <h1>Login</h1>
        <form>
            <label htmlFor='username'>Username: </label>
            <input 
            type='text'
            name='username'
            />
            <label htmlFor='password'>Password: </label>
            <input
            type='text'
            name='username'
            />

            <button type='submit'>Login</button>
        </form>
        </div>
    )
}

export default Login