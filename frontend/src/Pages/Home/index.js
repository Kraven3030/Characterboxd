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
                        <p>When a Chinese diplomat's daughter is kidnapped in Los Angeles, he calls in Hong Kong Detective Inspector Lee (Jackie Chan) to assist the FBI with the case. But the FBI doesn't want anything to do with Lee, and they dump him off on the LAPD, who assign wisecracking Detective James Carter (Chris Tucker) to watch over him. Although Lee and Carter can't stand each other, they choose to work together to solve the case on their own when they figure out they've been ditched by both the FBI and police.
                            <em> --Bren</em>
                        </p>
                        <img id='brenImg' className="bd-placeholder-img bd-placeholder-img-lg d-block" width="1000" height="800" src='https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/unsized/2018/02/22/5a8f25b7c6acd0360377b8e2_ezgif.com-crop%20(20).gif' alt="Rush Hour" />
                    </div>

                    <div className="carousel-item">
                        <h2>Developer Picks</h2>
                        <h4>"Blade Runner 2049"</h4>
                        <p>Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years.
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