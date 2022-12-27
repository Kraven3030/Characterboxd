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
            {/* <div className="container"> */}
            <div id='theCarousel' className='carousel slide' data-ride='carousel' >
                <ol className='carousel-indicators'>
                    <li data-target='#theCarousel' data-slide-to='0' className='active'></li>
                    <li data-target='#theCarousel' data-slide-to='1' ></li>
                    <li data-target='#theCarousel' data-slide-to='2' ></li>
                </ol>
                <div class='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='container'>
                            <h1>Header</h1>
                            <p>briuf</p>

                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='container'>
                            <h1>SQUID</h1>
                        </div>
                    </div>
                    <div className='carousel-item '>
                        <div className='container'> 
                        <h1>yerss</h1>
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


                {/* Blake's Movie */}
                    {/* <img src="https://play-lh.googleusercontent.com/NOsmYKa8Ve8nRLkXRuKT4nhN9-FZeno4TwTTPyPcI7g5B08mQxlkOJ82tUy8hTPw3G94kO7hQSipoIjEevDn=w240-h480-rw" alt="Slide-1" /> */}
                    
                {/*  Bren's Movie */} 
                    {/* <img src="https://flxt.tmsimg.com/assets/p21702_p_v8_ae.jpg" alt="Slide-2" /> */}
                    
                {/*  Rory's Movie */} 
                    {/* <img src="https://m.media-amazon.com/images/I/518C6o7KybL._AC_SY580_.jpg" alt="Slide-3" /> */}
                
                {/* <img className='headlineImg' src='https://i.guim.co.uk/img/media/384faecfbbc32859bc269b915a3f1fdeaa60a266/154_360_2795_1677/master/2795.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=059580cd4914df4339be6116c473ed0c' width="300" alt='Gladiator' /> */}
                <h2>TRACK FILMS YOU'VE WATCHED.</h2>
                <h2>SAVE THOSE YOU WANT TO SEE.</h2>
                <h2>TELL YOUR FRIENDS WHATS GOOD.</h2>
            {/* </div> */}
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