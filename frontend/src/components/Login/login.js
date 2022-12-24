// Import dependncies
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

// Import Styles
import "./login.css"


function Login(props) {
    // State the declarations 
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    })

    // Will keep track of what's inputted into the form
    const handleChange = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        if (localStorage.token) {
            setIsLoggedIn(true)
        }
    }, [])

    const handleSubmit = async (event, loginForm) => {
        event.preventDefault()
        const { data } = await axios.post(`http://localhost:9000/users/login`, {
            username: loginForm.username,
            password: loginForm.password
        })
        localStorage.token = data.token
        setIsLoggedIn(true)
        setShowForm(false)
    }

    //LOGOUT BUTTON FUNCTION
    const handleLogOut = () => {
        localStorage.clear()
        setIsLoggedIn(false)
    }

    // Function to control closing of the signup form when the X is clicked
    const closeForm = () => {
        setShowForm(false)
    }


    return (
        <div>
            <figure>
                <button onClick={setShowForm} type="submit">Login</button>
                {showForm ? (
                    <div className='loginModal'>
                        <div className='modalContent'>
                            <form onSubmit={handleSubmit} className='loginForm'>
                                <div className='loginDiv'>
                                    <Link onClick={closeForm} className='modalCloseBtn' to="/"><span>&times;</span></Link>
                                    <label htmlFor='username'>Username:</label>
                                    <input onChange={handleChange} type='text' name='username' placeholder='username' value={loginForm.username}></input>
                                    <label htmlFor="password">Password:</label>
                                    <input onChange={handleChange} type="password" name="password" placeholder="Password" value={loginForm.password}></input>
                                    <button onClick={(event) => handleSubmit(event, loginForm)} className='submitLoginBtn' type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : null}
            </figure>
        </div>
    )
}


export default Login