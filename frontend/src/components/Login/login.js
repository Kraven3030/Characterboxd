// Import dependncies
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
        <section classname="text-center text-lg-start">
            <div className='card mb-3'>
                <div className='row g-0 d-flex align-items-center'>
                    <div className='col-lg-4 d-none d-lg-flex'>
                        <img src='https://images.justwatch.com/poster/152823265/s592/gangs-of-new-york' alt='Inception' className='w-100 rounded float-left' />
                    </div>
                    <div class="col-lg-8">
                        <div className='card-body py-5 px-md-5'>

                            <form>

                                <h3 className='fw-normal mb-3 pb-3'>Login</h3>

                                <div className='form-outline mb-4'>
                                    <label className='form-label' htmlFor='username'>Username</label>
                                    <input
                                        type='text'
                                        name='username'
                                        onChange={handleChange}
                                        value={loginForm.username}
                                        placeholder='Username'
                                        className="form-control" />
                                </div>

                                <div className='form-outline mb-4'>
                                    <label className='form-label' htmlFor='password'>Password</label>
                                    <input
                                        type='password'
                                        name='password'
                                        onChange={handleChange}
                                        value={loginForm.password}
                                        placeholder='Password'
                                        className="form-control" />
                                </div>
                                <div className="pt-1 mb-4">
                                    <button onClick={(event) => handleSubmit(event, loginForm)} className='btn btn-primary btn-block mb-4' type='submit'>Login</button>
                                </div>
                                <p>Don't have an account? <a href="/signup" class="link-info">Signup here</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}


export default Login