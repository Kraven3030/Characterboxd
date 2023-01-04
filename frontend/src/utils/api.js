import axios from 'axios';


// For testing purposes
// axios.defaults.baseURL = 'http://localhost:9000/';


// Axios request to create new user account
export async function createUser(formData) {
    const { data } = await axios.post('users/signup', formData)
    return data
}

// Axios request to log in to user account
export async function loginToAccount(formData) {
    const { data } = await axios.post('users/login', formData)
    return data
}

// Get user data if user is logged in
export async function getUserData(userId) {
    const { data } = await axios.get('users/' + userId)
    return data
}

// Get user personal reviews if user is logged in
export async function userReviews(userId) {
    const { data } = await axios.get(`reviews/user/${userId}`)
    return data
}

// Get reviews by media ID
export async function allReviews(mediaId) {
    const { data } = await axios.get(`/reviews/${mediaId}`)
    return data
}

// Axios request that will allow users to create reviews once they are logged in
export async function createReview(reviewData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    const { data } = await axios.post('reviews/create', reviewData, config)
    return data
}

// Axios request that will allow users to update reviews once they are logged in
export async function updateReview(reviewData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    const { data } = await axios.put('reviews/update', reviewData, config)
    return data
}

// Axios request that will allow users to delete reviews once they are logged in
export async function deleteReview(reviewId) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    const { data } = await axios.delete(`reviews/delete/${reviewId}`, config)
    return data
}