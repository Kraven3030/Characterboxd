// Import dependncies
import { useState } from 'react'
import { Link } from "react-router-dom";
import { loginToAccount } from '../../utils/api'
// Import Styles
import "./login.css"




function Login(props) {
    // State the declarations 
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    // Will keep track of what's inputted into the form
    const handleChange = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }


    const handleSubmit = (event) => {
        // Prevents webpage from reloading when user logs in
        event.preventDefault()
        // Grabs data from backend via axios in the api utils file
        loginToAccount(loginForm)
            // Then token will be stored in local storage
            .then((data) => localStorage.token = data.token)
    }


    return (
        <figure>
            <div className='loginModal'>
                <div className='modalContent'>
                    <form className='loginForm'>
                        <div className='loginDiv'>
                            <Link className='modalCloseBtn' to="/"><span>&times;</span></Link>
                            <label htmlFor='Email'>Email:</label>
                            <input onChange={handleChange} type='text' name='email' placeholder='Email' value={loginForm.email}></input>
                            <label htmlFor="password">Password:</label>
                            <input onChange={handleChange} type="password" name="password" placeholder="Password" value={loginForm.password}></input>
                            <button onClick={(e) => props.handleSubmit(e, loginForm)} className='submitLoginBtn' type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </figure>
    )
}


export default Login