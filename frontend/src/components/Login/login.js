// Import dependncies
import axios from 'axios';
import { useState } from 'react'
import { Link } from "react-router-dom";

// Import Styles
import "./login.css"


function Login(props) {
    // State the declarations 
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    })

    const handleSubmit = async (event, loginForm) => {
        event.preventDefault()
        const { data } = await axios.post(`http://localhost:9000/users/login`, {
            username: loginForm.username,
            password: loginForm.password
        })
        localStorage.token = data.token
    }

    // Will keep track of what's inputted into the form
    const handleChange = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }


    return (
        <div>
            <figure>
                <div className='loginModal'>
                    <div className='modalContent'>
                        <form className='loginForm'>
                            <div className='loginDiv'>
                                <Link className='modalCloseBtn' to="/"><span>&times;</span></Link>
                                <label htmlFor='username'>Username:</label>
                                <input onChange={handleChange} type='text' name='username' placeholder='username' value={loginForm.username}></input>
                                <label htmlFor="password">Password:</label>
                                <input onChange={handleChange} type="password" name="password" placeholder="Password" value={loginForm.password}></input>
                                <button onClick={(event) => handleSubmit(event, loginForm)} className='submitLoginBtn' type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </figure>
        </div>
    )
}


export default Login