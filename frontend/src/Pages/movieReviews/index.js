import { useState, useEffect } from "react";
import axios from "axios";
import Nav from '../../components/Nav/nav'



function MovieReviews() {

    // const [mediaReview, setMediaReview] = useState([]);

    // useEffect(() => {
    //     async function grabMedia() {
    //         const data = await axios.get(`http://localhost:9001/media/${media.id}`)
    //         setMedia(data)
    //     }
    // },[])


    return (
        <div>
            <Nav />
            <img src="#" className="img-thumbnail" alt="" />
            <div>
                <section>
                </section>
            </div>
        </div>
    );

}

export default MovieReviews