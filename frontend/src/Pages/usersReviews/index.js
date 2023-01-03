import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userReviews } from '../../utils/api';
import './styles.css'


function UsersReviews() {

    const [PersonalReviews, setPersonalReviews] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    //const userId = "63a4ef83ca1ff604e7e9235f";
    const username = localStorage.getItem('username')
    console.log(userId, username)



    useEffect(() => {
         const fetchReviews = async () => {
             await userReviews(userId).then((res) => {
                setPersonalReviews(res)
             })

        }
        
        fetchReviews(userId)
    }, [userId])


    return (
        <div>
            <h2>
                Personal Reviews
            </h2>
            <div>
                {PersonalReviews?.reviews?.map((review) => (
                    <div key={
                        Math.random()
                    }>
                        {
                            review.map((review) => (
                                <div
                                    className="review"
                                    key={
                                        Math.random()

                                    }>
                                    <h3
                                        className="review-title"
                                    >
                                        Title:
                                        {review.title}
                                    </h3>
                                    <h4
                                        className="review-movie"
                                    >
                                        Movie:
                                        {review.movieName}
                                    </h4>
                                    <p
                                        className="review-body"
                                    >
                                        Review:
                                        {review.body}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                ))}
            </div>


        </div>
    );

}

export default UsersReviews