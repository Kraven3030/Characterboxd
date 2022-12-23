// Import Dependencies
import { useState } from 'react'
import { Link } from "react-router-dom";
// Import Styles
import "./signup.css"


function Signup(props) {
    // State the declarations
    const [signupForm, setSignupForm] = useState({
        username: '',
        password: '',
        endpoint: 'signup'
    })

    // Will keep track of what's inputted into the form
    const handleChange = (event) => {
        setSignupForm({ ...signupForm, [event.target.name]: event.target.value })
    }

    // const handleSubmit = (event) => {
    //     // Prevents webpage from reloading once user signs up
    //     event.preventDefault()
    //     // Grabs data from backend via axios in the api utils file
    //     createAccount(signupForm)
    //         // Then token will be stored in local storage
    //         .then((data) => localStorage.token = data.token)
    // }


    return (
        <figure>
            <div className='signupModal'>
                <div className='modalContent'>
                    <form className='signupForm'>
                        <div className='signupDiv'>
                            <Link className='modalCloseBtn' to="/"><span>&times;</span></Link>
                            <label htmlFor='username'>Username:</label>
                            <input type='text' name='username' placeholder='username' value={signupForm.username} onChange={handleChange} required></input>
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" placeholder="Password" value={signupForm.password} onChange={handleChange} required></input>
                            <button onClick={(e) => props.handleSubmit(e, signupForm)} className='submitSignupBtn' type="submit">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </figure>
    )
}

export default Signup;