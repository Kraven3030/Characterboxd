import { useState, useEffect } from "react";
import axios from "axios";
import { createReview } from "../../utils/api"



function MovieReviews() {

    const [reviewData, setReviewData] = useState({
        movieName: '',
        title: '',
        body: '',
        reviewer: ''
    })

    function handleChange(event) {
        setReviewData({ ...reviewData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        createReview(reviewData)
            .then((data) => console.log(data))
        setReviewData({
            movieName: '',
            title: '',
            body: '',
            reviewer: ''
        })
    }


    return (
        <div className="container">
            <form>
                <h1>Leave A Review</h1>
                <label htmlFor="movieName">Movie Name</label>
                <input placeholder="Movie Name" type="text" name="movieName" value={reviewData.movieName} onChange={handleChange} />

                <label htmlFor="title">Review Title:</label>
                <input placeholder="Review Title" type="text" name="title" value={reviewData.title} onChange={handleChange} />

                <label htmlFor="body">Review</label>
                <input placeholder="Review" type="text" name="body" value={reviewData.body} onChange={handleChange} />

                <label htmlFor="reviewer">Username:</label>
                <input placeholder="Username" type="text" name="reviewer" value={reviewData.reviewer} onChange={handleChange} />
                <button onClick={handleSubmit}>Post Review</button>
            </form>
        </div>
    );

}

export default MovieReviews