import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { userReviews } from '../../utils/api';
import './styles.css'


function UsersReviews() {

    const [PersonalReviews, setPersonalReviews] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    const username = localStorage.getItem('username')



    useEffect(() => {
         const fetchReviews = async () => {
             await userReviews(userId).then((res) => {
                setPersonalReviews(res)
             })

        }
        
        fetchReviews(userId)
        console.log(PersonalReviews)
    }, [userId])




    return (
        <div>
            <h2>
                Personal Reviews
            </h2>
            <div>
                {PersonalReviews?.reviews?.map((review) => (
                    <div>
                        {
                            review.map((review) => (
                                
                                <div className="review">
                                    <h3 className="review-title">
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
                                    <Link to={"/EditReview/"} state={{
                                        title: review.title,
                                        body: review.body,
                                        reviewId: review._id
                                    }}>Edit Review</Link>
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