import React, { useState, useEffect } from 'react';

import axios from 'axios'
import './styles.css'
import Signup from '../../components/Signup/signup';

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

            <h2 className='intro'>REVIEW FILMS YOU'VE WATCHED.</h2>
            <h2 className='intro'>TRACK THOSE YOU WANT TO SEE.</h2>
            <h2 className='intro'>TELL YOUR FRIENDS WHATS GOOD.</h2>
            <aside className='getStarted'>
                <a id='getStarted' className='btn btn-success btn-lg' role='button' href={<Signup />}>GET STARTED</a>
            </aside>
            <div className="content">
                <div id='theCarousel' className='carousel slide' data-ride='carousel' >
                    <div className='carousel-inner'>
                        {/* Blake's Movie */}
                        <div className='carousel-item active'>
                            <h4 className='devPicks'>Developer Picks</h4>
                            <div className='gif' id='gladiator'>
                                <img className='img-thumbnail' src='https://media1.giphy.com/media/d7mMzaGDYkz4ZBziP6/200w.webp?cid=ecf05e471oqetph8u6muoolr79r0cojqe1pgypr9gdg0vprb&rid=200w.webp&ct=g' alt='Gladiator' />
                            </div>
                            <div className='container'>
                                <h2>Gladiator</h2>
                                <p>A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.
                                    < br />
                                    <em className='devPickBy'>Picked by Blake</em>
                                </p>

                            </div>
                        </div>

                        {/*  Rory's Movie */}
                        <div className='carousel-item'>
                            <h4 className='devPicks'>Developer Picks</h4>
                            <div className='gif' id='fifth'>
                                <img className='img-thumbnail' src='https://media4.giphy.com/media/rbmQ6CRJERE3K/giphy.webp?cid=ecf05e47ozppz3803jp5f8w1z31s5a3ec9ods5dyzh8cr469&rid=giphy.webp&ct=g' alt='The fifth element' />
                            </div>
                            <div className='container1'>
                                <h2>Fifth Element</h2>
                                <p>
                                    In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.
                                    < br />
                                    <em className='devPickBy'>Picked by Rory</em>
                                </p>
                            </div>
                        </div>

                        {/*  Bren's Movie */}
                        <div className='carousel-item '>
                            <h4 className='devPicks'>Developer Picks</h4>
                            <div className='gif' id='rush'>
                                <img className='img-thumbnail' src='https://i.imgur.com/H0mWVY8.gif' alt='Rush hour' />
                            </div>
                            <div className='container2'>
                                <h2>Rush Hour</h2>
                                <p>
                                    A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective.
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