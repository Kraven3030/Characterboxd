import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { allReviews } from "../../utils/api";



function MovieReviews() {

    const location = useLocation();
    const { state } = location;
    const baseUrl = "https://image.tmdb.org/t/p/original"


    const [mediaReviews, setMediaReviews] = useState([])
    const [mediaId, setMediaId] = useState(state.mediaId);



    useEffect(() => {
        const fetchReviews = async () => {
            await allReviews(state.mediaId).then((res) => {
                setMediaReviews(res)
            })

        }

        fetchReviews(state.mediaId)
    }, [state.mediaId])



    return (
        <div className="card">
            {mediaReviews.map(review => (
                <div className="card-body" key={review._id}>
                    <h1 className="card-title">{review.title}</h1>
                    <h2 className="card-subtitle mb-2 text-muted"> {review.body}</h2>
                    <h3 className="card-text">{review.reviewer.username}</h3>
                </div>
            ))


            }

        </div >
    );

}

export default MovieReviews