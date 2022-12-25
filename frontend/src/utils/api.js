import axios from 'axios';

// create user
export async function createUser(formData) {
    const { data } = await axios.post('http://localhost:9000/users/signup', formData)
    return data
}

// log in to user account
export async function loginToAccount(formData) {
    const { data } = await axios.post('http://localhost:9000/users/login', formData)
    return data
}

// Will allow user to create reviews once logged in
export async function createReview(reviewData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    const { data } = await axios.post('http://localhost:9000/post', reviewData, config)
    return data
}