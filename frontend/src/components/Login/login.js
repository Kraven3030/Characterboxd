import { useState } from 'react'

function Login() {
    return (
        <figure>
            <form className='loginForm'>
                <div className='loginDiv'>
                    <label htmlFor='Username'>Username:</label>
                    <input type='text' id='username' placeholder='Username'></input>
                </div>
            </form>
        </figure>
    )
}

export default Login