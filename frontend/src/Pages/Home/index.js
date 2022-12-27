import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
// import Nav from '../../components/Nav/nav'

import axios from 'axios'
import './styles.css'

function Home() {
    const [media, setMedia] = useState([]);
    // const [mediaReview, setMediaReview] = useState([]);
    // const [user, setUser] = useState([]);


    const getMedia = () => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
            .then((response) => {
                setMedia(response.data)
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

    useEffect(() => {
        getMedia()
    }, []);

    return (

        <div>
            <div className="container">
                <img className='headlineImg' src='https://i.guim.co.uk/img/media/384faecfbbc32859bc269b915a3f1fdeaa60a266/154_360_2795_1677/master/2795.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=059580cd4914df4339be6116c473ed0c' width="300" alt='Gladiator' />
                <h2>Track films you've watched.</h2>
                <h2>Save those you want to see.</h2>
                <h2>Tell your friends what's good.</h2>
            </div>
                {/* {media.map(data => {
                    <div>
                        <img src={data.poster_path} />
                        <h2>{data.title}</h2>
                        <h5>{data.overview}</h5>
                    </div>
                })} */}
        </div>
    );

}

export default Home