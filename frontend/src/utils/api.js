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

// Get user data if user is logged in
export async function getUserData(userId) {
    const { data } = await axios.get('http://localhost:9000/users/' + userId)
    return data
}

// Get user personal reviews if user is logged in
export async function userReviews(userId) {
    const { data } = await axios.get(`http://localhost:9000/reviews/user/${userId}`)
    return data
}

// Axios request that will allow users to create reviews once they are logged in
export async function createReview(reviewData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    const { data } = await axios.post('http://localhost:9000/reviews/create', reviewData, config)
    return data
}