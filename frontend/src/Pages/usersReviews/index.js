import { useState, useEffect } from "react";
import axios from 'axios'


function UsersReviews() {

    const [reviews, setReviews] = useState([]);
    const [userId, setUserId] = useState({
        username: ''
    });

    useEffect(() => {
        async function grabReviews() {
            const results = await axios.get('http://localhost:9000/reviews/${reviews.id}');
            setReviews(results.data);   
        }
        grabReviews();
    }, [])

    const reviewByUser = reviews.filter(review =>
        review.reviewer === userId)


    return (
        <div>
            <img />
            <section>
                <ul>
                    {reviewByUser.map(review => (
                        <li key={review.id}>
                            {review.title}
                            {review.body}
                            {review.reviewer}
                            </li>
                    ))}
                </ul>  
            </section>               
        </div>
    );

}

export default UsersReviews