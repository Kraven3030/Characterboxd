import React, { useState } from 'react';
import { createReview } from "../../utils/api"



function NewReview() {

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
                <h1 className='text-center'>Leave A Review</h1>
                <div className='form-group'>
                    <label htmlFor="movieName">Movie Name</label>
                    <input className='form-control' placeholder="Movie Name" type="text" name="movieName" value={reviewData.movieName} onChange={handleChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor="title">Review Title:</label>
                    <input className='form-control' placeholder="Review Title" type="text" name="title" value={reviewData.title} onChange={handleChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor="body">Review</label>
                    <input className='form-control' placeholder="Review" type="text" name="body" value={reviewData.body} onChange={handleChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor="reviewer">Username:</label>
                    <input className='form-control' placeholder="Username" type="text" name="reviewer" value={reviewData.reviewer} onChange={handleChange} />
                </div>

                <button className='btn btn-warning' onClick={handleSubmit}>Post Review</button>
            </form>
        </div>
    );


}

export default NewReview