import { useState } from 'react'


function Signup(props) {

    const [email] = useState(props);
    const [password] = useState(props);

    return (
        <figure>
            <form className="form">
                <div className="formDiv">
                    <label htmlFor="Email">Email:</label>
                    <input onChange={email} type="text" id="username" placeholder="Email"></input>
                    <label htmlFor="password">Password:</label>
                    <input onChange={password} type="password" id="password" placeholder="Password"></input>
                    <button type="submit">Login</button>
                </div>
            </form>
        </figure>
    )
}

export default Signup;