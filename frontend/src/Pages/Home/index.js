import React, { useState, useEffect } from 'react';

import axios from 'axios'
import './styles.css'
import Signup from '../../components/Signup/signup';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home() {
    const [media, setMedia] = useState([]);
    const [blakeMovie, setBlakeMovie] = useState({});
    const [brenMovie, setBrenMovie] = useState({});
    const [roryMovie, setRoryMovie] = useState({});
    // const [mediaReview, setMediaReview] = useState([]);
    // const [user, setUser] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original"


    const getMedia = () => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
            .then((response) => {
                setMedia(response.data)
            })
    }
    const blakePick = () => {
        axios.get(`https://api.themoviedb.org/3/movie/98?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
            .then((response) => {
                setBlakeMovie(response.data)
            })
    }

    const brenPick = () => {
        axios.get(`https://api.themoviedb.org/3/movie/2109?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
            .then((response) => {
                setBrenMovie(response.data)
            })
    }

    const roryPick = () => {
        axios.get(`https://api.themoviedb.org/3/movie/335984?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
            .then((response) => {
                setRoryMovie(response.data)
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
        <div
            style={{
                backgroundColor: '#1b1b1b',
            }}>
            <h2 className='intro'>REVIEW FILMS YOU'VE WATCHED.</h2>
            <h2 className='intro'>TRACK THOSE YOU WANT TO SEE.</h2>
            <h2 className='intro'>TELL YOUR FRIENDS WHATS GOOD.</h2>
            <aside className='getStarted'>
                <a id='getStarted' className='btn btn-success btn-lg' role='button' href='/signup'>GET STARTED</a>
            </aside>
            <div className="content">
                <div id='theCarousel' className='carousel slide' data-ride='carousel' >
                    <div className='carousel-inner'>
                        {/* Blake's Movie */}
                        {blakePick()}
                        <div className='carousel-item active'>
                            <h4 className='devPicks'>Developer Picks</h4>
                            <div className='gif' id='gladiator'>
                                <img className='img-thumbnail' src={baseUrl + blakeMovie.poster_path} alt={blakeMovie.title} />
                            </div>
                            <div className='container'>
                                <h2>{blakeMovie.title}</h2>
                                <p>{blakeMovie.overview}
                                    < br />
                                    <em className='devPickBy'>Picked by Blake</em>
                                </p>

                            </div>
                        </div>

                        {/*  Rory's Movie */}
                        {roryPick()}
                        <div className='carousel-item'>
                            <h4 className='devPicks'>Developer Picks</h4>
                            <div className='gif' id='fifth'>
                                <img className='img-thumbnail' src={baseUrl + roryMovie.poster_path} alt={roryMovie.title} />
                            </div>
                            <div className='container1'>
                                <h2>{roryMovie.title}</h2>
                                <p>
                                    {roryMovie.overview}
                                    < br />
                                    <em className='devPickBy'>Picked by Rory</em>
                                </p>
                            </div>
                        </div>

                        {/*  Bren's Movie */}
                        {brenPick()}
                        <div className='carousel-item '>
                            <h4 className='devPicks'>Developer Picks</h4>
                            <div className='gif' id='rush'>
                                <img className='img-thumbnail' src={baseUrl + brenMovie.poster_path} alt={brenMovie.title} />
                            </div>
                            <div className='container2'>
                                <h2>{brenMovie.title}</h2>
                                <p>
                                    {brenMovie.overview}
                                    < br />
                                    <em className='devPickBy'>Picked by Bren</em>
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href='#theCarousel' className='carousel-control-prev' role='button' data-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    </a>
                    <a href='#theCarousel' className='carousel-control-next' role='button' data-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    </a>
                </div>
            </div>
        </div>

    );

}

export default Home