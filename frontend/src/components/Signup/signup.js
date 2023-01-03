// Import Dependencies
import { useState } from 'react'
import { createUser } from '../../utils/api'
import { useNavigate } from 'react-router-dom';

// Import Styles
import "./signup.css"


function Signup(props) {
    // State the declarations
    const navigate = useNavigate();
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
            .then((data) => {localStorage.token = data.token;
                localStorage.username = data.username;
                localStorage.userId = data.userId;})
        props.setIsLoggedIn(true)
        setSignupForm({
            username: '',
            password: ''
        })
        navigate("/", {replace: true});
    }


    return (
        <section className="text-center text-lg-start">
            <div className='card mb-3 allSignup'>
                <div className='row g-0 d-flex align-items-center'>
                    <div className='col-lg-4 d-none d-lg-flex'>
                        <img src='https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg' alt='Inception' className='w-100 rounded float-left' />
                    </div>
                    <div className="col-lg-8">
                        <div className='card-body py-5 px-md-5 signupCard'>

                            <form>

                                <h3 className='fw-normal mb-3 pb-3'>Create Account</h3>

                                <div className='form-outline mb-4'>
                                    <label className='form-label' htmlFor='username'>Username</label>
                                    <input
                                        type='text'
                                        name='username'
                                        onChange={handleChange}
                                        value={signupForm.username}
                                        placeholder='Username'
                                        className="form-control" />
                                </div>

                                <div className='form-outline mb-4'>
                                    <label className='form-label' htmlFor='password'>Password</label>
                                    <input
                                        type='password'
                                        name='password'
                                        onChange={handleChange}
                                        value={signupForm.password}
                                        placeholder='Password'
                                        className="form-control" />
                                </div>
                                <div className="pt-1 mb-4">
                                    <button onClick={(event) => handleSubmit(event, signupForm)} className='btn btn-primary btn-block mb-4' type='submit'>Signup</button>
                                </div>
                                <p>Already have an account? <a href="/login" className="link-info">Login here</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Signup;