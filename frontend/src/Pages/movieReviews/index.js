import { useState, useEffect } from "react";
import axios from "axios";
import Nav from '../../components/Nav/nav'



function MovieReviews() {

    const [mediaReview, setMediaReview] = useState([]);
    const [mediaId, setMediaId] = useState({

    })

    useEffect(() => {
        async function grabMedia() {
            const results = await axios.get(`http://localhost:9000/reviews/${media.id}`)
            setMediaReview(results.data.reviews)
        }
        grabMedia()
    },[])

    const reviewByMedia = mediaReview.filter(review =>
        review.title === mediaId)


    return (
        <div>
            <img src="#" className="img-thumbnail" alt="" />
            <section>
                <ul>
                    {reviewByMedia.map(review => (
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

export default MovieReviews