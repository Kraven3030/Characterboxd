import axios from 'axios';


// Axios request to create new user account
export async function createUser(formData) {
    const { data } = await axios.post('http://localhost:9000/users/signup', formData)
    return data
}

// Axios request to log in to user account
export async function loginToAccount(formData) {
    const { data } = await axios.post('http://localhost:9000/users/login', formData)
    return data
}

// Axios request that will allow users to create reviews once they are logged in
export async function createReview(reviewData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    const { data } = await axios.post('http://localhost:9000/post', reviewData, config)
    return data
}