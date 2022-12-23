import axios from 'axios';

// Axios for user to Log into user account 
export async function loginToAccount(loginForm) {
    const { data } = await axios.post('http://localhost:9000/users/login', loginForm)
    return data
}

// Axios for user to create an account
export async function createAccount(signupForm) {
    const { data } = await axios.post('http://localhost:9000/users/signup', signupForm)
    return data
}