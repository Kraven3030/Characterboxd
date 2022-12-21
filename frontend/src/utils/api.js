import axios from 'axios';

//Log into user account
export async function loginToAccount(loginForm) {
    const { data } = await axios.post('http://localhost:9000/user/login', loginForm)
    return data
}