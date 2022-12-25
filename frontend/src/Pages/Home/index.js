import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from 'axios'
import './styles.css'

function Home() {
    const [media, setMedia] = useState([]);
    // const [mediaReview, setMediaReview] = useState([]);
    // const [user, setUser] = useState([]);


    const getMedia = () => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
            .then((response) => {
                setMedia(response.data.results)
            })
    }

    // async function grabMedia() {
    //         const data = await axios.get(`http://localhost:9001/media/${media.id}`)
    //         setMediaReview(data)
    //         }

    // async function grabUser() {
    //     const data = await axios.get(`http://localhost:9000/user/${user._id}`)
    //     setUser(data)
    // }

    // useEffect(() => {
    //     getMedia(),
    //     grabUser(),
    //     grabMedia()
    // }, []);

    return (

        <div>
            <nav>
                <SearchBar />
            </nav>
            <section>
                <h2>Track films you've watched.</h2>
                <h2>Save those you want to see.</h2>
                <h2>Tell your friends what's good.</h2>
                {media.map(data => {
                    <div>
                        <img src={data.poster_path} />
                        <h2>{data.title}</h2>
                        <h5>{data.overview}</h5>
                    </div>
                })}
            </section>
        </div>
    );

}

export default Home