import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './styles.css'

function Home() {
    const [media, setMedia] = useState([]);
    
    const getMedia = () => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
        .then((response) => {
          setMedia(response.data.results)
        })
    }
    
    useEffect(() => {
        getMedia()
    }, []);

    return(
        <div>
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