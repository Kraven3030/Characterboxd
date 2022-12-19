import { useState } from 'react'

function Login(props) {

    const [username] = useState(props);
    const [password] = useState(props);


    return (
        <figure>
            <form className='loginForm'>
                <div className='loginDiv'>
                    <label htmlFor='Username'>Username:</label>
                    <input onChange={username} type='text' id='username' placeholder='Username'></input>
                    <label htmlFor="password">Password:</label>
                    <input onChange={password} type="password" id="password" placeholder="Password"></input>
                    <button type="submit">Login</button>
                </div>
            </form>
        </figure>
    )
}

export default Login