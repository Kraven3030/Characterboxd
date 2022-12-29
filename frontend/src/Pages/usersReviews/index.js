import { useState, useEffect } from "react";
import axios from 'axios'


function UsersReviews() {

    const [reviews, setReviews] = useState([]);
    const [userId, setUserId] = useState({
        username: ''
    });

    useEffect(() => {
        async function fetchReviews() {
            const results = await axios.get('http://localhost:9000/reviews/${reviews.id}');
            setReviews(results.data);   
        }
        fetchReviews();
    }, [])

    const reviewByUser = reviews.filter(review =>
        review.userId === userId)


    return (
        <div>
            <ul>
                {reviewByUser.map(review => (
                    <li key={review.id}>
                        {review.title}
                        {review.body}
                        {review.reviewer}
                        </li>
                 ))}
            </ul>                 
        </div>
    );

}

export default UsersReviews