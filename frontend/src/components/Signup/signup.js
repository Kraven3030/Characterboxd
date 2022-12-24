// Import Dependencies
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

// Import Styles
import "./signup.css"


function Signup(props) {
    // State the declarations
    const [signupForm, setSignupForm] = useState({
        username: '',
        password: ''
    })

    // Will keep track of what's inputted into the form
    const handleChange = (event) => {
        setSignupForm({ ...signupForm, [event.target.name]: event.target.value })
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showForm, setShowForm] = useState(false)

    // check if logged in when component mounts
    useEffect(() => {
        if (localStorage.token) {
            setIsLoggedIn(true)
        }
    }, [])

    const handleSubmit = async (event, signupForm) => {
        event.preventDefault()
        const { data } = await axios.post(`http://localhost:9000/users/signup`, {
            username: signupForm.username,
            password: signupForm.password
        })
        localStorage.token = data.token
        setIsLoggedIn(true)
        setShowForm(false)
    }

    // Function to control closing of the signup form when the X is clicked
    const closeForm = () => {
        setShowForm(false)
    }


    return (
        <nav>
            <figure>
                <button onClick={setShowForm} type="submit">Signup</button>
                {showForm ? (
                    <div className='signupModal'>
                        <div className='modalContent'>
                            <form onSubmit={handleSubmit} className='signupForm'>
                                <div className='signupDiv'>
                                    <Link onClick={closeForm} className='modalCloseBtn' to="/"><span>&times;</span></Link>
                                    <label htmlFor='username'>Username:</label>
                                    <input type='text' name='username' placeholder='username' value={signupForm.username} onChange={handleChange} required></input>
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" name="password" placeholder="Password" value={signupForm.password} onChange={handleChange} required></input>
                                    <button onClick={(e) => handleSubmit(e, signupForm)} className='submitSignupBtn' type="submit">Signup</button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : null}
            </figure>
        </nav>
    )
}

export default Signup;