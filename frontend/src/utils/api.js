import axios from 'axios';

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