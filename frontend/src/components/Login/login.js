// Import dependncies
import axios from 'axios';
import { useState } from 'react'
import { loginToAccount } from '../../utils/api';


// Import Styles
import "./login.css"


function Login(props) {
    // State the declarations 
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    // Will keep track of what's inputted into the form
    const handleChange = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event, loginForm) => {
        event.preventDefault()
        loginToAccount(loginForm)
            .then((data) => localStorage.token = data.token)
        props.setIsLoggedIn(true)
    }


    return (

        <div className='container'>
            <h2>Login</h2>

            <form>
                <div className='input-text'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={loginForm.username} />
                </div>

                <div className='input-text'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={loginForm.password} />
                </div>

                <button onClick={(event) => handleSubmit(event, loginForm)} className='btn btn-primary' type='submit'>Login</button>
            </form>
        </div>

    )
}

export default Login