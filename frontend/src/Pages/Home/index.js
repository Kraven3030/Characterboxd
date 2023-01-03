import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './styles.css'


function Home() {



    return (
        <div className='container bg-dark'>

            <h2 className='intro'>REVIEW FILMS YOU'VE WATCHED.</h2>
            <h2 className='intro'>TRACK THOSE YOU WANT TO SEE.</h2>
            <h2 className='intro'>TELL YOUR FRIENDS WHATS GOOD.</h2>
            <button className='getStarted btn btn-success btn-lg'>
                <a id='getStarted' className='btn btn-success btn-lg' role='button' href='/signup'>GET STARTED</a>
            </button>

            <div id="carouselCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Blake slide"></button>
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Bren slide"></button>
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Rory slide"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h2>Developer Picks</h2>
                        <h4>"Gladiator"</h4>
                        <p>One of the best films of a generation, it's a bold claim, but Gladiator truly is that GOOD. Every single element is perfect, the story is phenomenal, one to absorb you for the full running time. The visuals are incredible, an epic masterpiece for the eyes as well as the soul. The acting is first rate, surely the aim of any film is to move you, this does just that and then some.
                            <em> --Blake</em>
                        </p>
                        <img id='blakeImg' className="bd-placeholder-img bd-placeholder-img-lg d-block" width="800" height="800" src='https://media0.giphy.com/media/d7mMzaGDYkz4ZBziP6/giphy.gif' alt="Gladiator" />
                    </div>
                    <div className="carousel-item">
                        <h2>Developer Picks</h2>
                        <h4>"Rush Hour"</h4>
                        <p>A cinematic masterpiece. Rush Hour is one of the best action-comedy films out there, that goes to the second and third movies. The characters are amazing and hilarious. Always a fun watch, Chris Tucker and Jackie Chan outdid themselves on these movies. An amazing performance that will bring you a handful of laughs.
                            <em> --Bren</em>
                        </p>
                        <img id='brenImg' className="bd-placeholder-img bd-placeholder-img-lg d-block" width="1000" height="800" src='https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/unsized/2018/02/22/5a8f25b7c6acd0360377b8e2_ezgif.com-crop%20(20).gif' alt="Rush Hour" />
                    </div>

                    <div className="carousel-item">
                        <h2>Developer Picks</h2>
                        <h4>"Blade Runner 2049"</h4>
                        <p>An absolute cinematic masterpiece of the modern times, the long awaited sequel to the critically acclaimed Blade Runner is one of the best movies I have seen in many years. This movie looks gorgeous and truly lends itself to displays with High Dynamic Range due to a beautiful combination of bright vivid colors and deep black backgrounds. I highly recommend seeing the original Blade Runner as Harrison Ford reprises his role in this sequel. This movie is pure kino that will live on in internet culture for years to come. 
                            <em> --Rory</em>
                        </p>
                        <img className="bd-placeholder-img bd-placeholder-img-lg d-block" width="800" height="800" src='https://media.tenor.com/Vlr5ep-dRXMAAAAd/ryan-gosling-blade-runner2049.gif' alt="Blade Runner 2049" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );

}

export default Home