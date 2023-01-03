import React, { useState } from 'react';
import { createReview } from "../../utils/api"
import { useLocation, useNavigate } from 'react-router-dom'




const NewReview = () => {
    
    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();
    const baseUrl = "https://image.tmdb.org/t/p/original"
    const [reviewData, setReviewData] = useState({
        mediaId: '',
        movieName: '',
        title: '',
        body: '',
        reviewer: localStorage.getItem('userId')
    })

    function handleChange(event) {
        setReviewData({ ...reviewData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setReviewData({ movieId: state.mediaId, 
            movieName: state.mediaName, 
            reviewer: localStorage.getItem('userId')
        })
        const reviewInfo = {
            mediaId: state.mediaId,
            movieName: state.mediaName,
            title: reviewData.title,
            body: reviewData.body,
            reviewer: localStorage.getItem('userId')
        }
        createReview(reviewInfo)
           .then((data) => console.log(data))
        setReviewData({
            mediaId: '',
            movieName: '',
            title: '',
            body: '',
            reviewer: ''
        })
        navigate("/UsersReviews", {replace: true});
    }


    return (
        <div className="container">
            <form>

                <h1>Leave A Review</h1>
                <h2 className="mediaCard">{state.mediaName}</h2>
                <img src={`${baseUrl + state.mediaImg}`} alt={state.mediaName} className="mediaCard"/>
                <h3 className="mediaCard">{state.mediaRelease}</h3>
                <p className="mediaCard">{state.mediaDescription}</p>

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