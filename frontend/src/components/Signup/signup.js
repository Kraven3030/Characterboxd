// Import Dependencies
import { useState } from 'react'
import axios from 'axios'
import { createUser } from '../../utils/api'

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

    const handleSubmit = async (event) => {
        event.preventDefault()
        createUser(signupForm)
            .then((data) => localStorage.token = data.token)
        props.setIsLoggedIn(true)
    }


    return (
        <div className='container'>
            <h2>Signup</h2>

            <form>
                <div className='input-text'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={signupForm.username} />
                </div>

                <div className='input-text'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={signupForm.password} />
                </div>

                <button onClick={(event) => handleSubmit(event, signupForm)} className='btn btn-primary' type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Signup;