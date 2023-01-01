import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userReviews } from '../../utils/api';

import axios from 'axios'


function UsersReviews() {

    const [personalReviews, setPersonalReviews] = useState([])
    const { userId } = useParams()


    useEffect(() => {
        const fetchReviews = async () => {
            const reviewData = { userId: userId }
            const data = await userReviews(reviewData)
            setPersonalReviews(data)
        }
        fetchReviews()
    }, [userId])



    return (
        <div>
            <h1>Hello World!</h1>
            <ul>
                {personalReviews.map(review => (
                    <li>
                        {review.movieName}
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