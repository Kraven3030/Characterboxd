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
        setReviewData({
            movieId: state.mediaId,
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
        navigate("/UsersReviews", { replace: true });
    }


    return (
        <section className='container'>
            <div className='card py-5 px-md-5 align-items-center bg-dark'>
                <img className='card-img-top' src={`${baseUrl + state.mediaImg}`} alt={state.mediaName} />
                <div className="card-body">
                    <h2 className="card-title">{state.mediaName}</h2>
                    <h3 className="card-text">{state.mediaRelease}</h3>
                    <p className="card-text">{state.mediaDescription}</p>
                    <form>
                        <div className='col-md-9 form'>
                            <label className="form-label" htmlFor="title">Review Title:</label>
                            <input
                                className="form-control"
                                placeholder="Review Title"
                                type="text"
                                name="title"
                                onChange={handleChange}
                            />

                            <label className="form-label" htmlFor="body">Review</label>
                            <input
                                className="form-control"
                                placeholder="Review"
                                type="text"
                                name="body"

                                onChange={handleChange}
                            />

                            <button className="btn btn-primary" onClick={handleSubmit}>
                                Post Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );


}

export default NewReview