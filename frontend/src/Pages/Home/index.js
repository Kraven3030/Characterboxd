import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './styles.css'

function Home() {
    const [media, setMedia] = useState([]);


    
    useEffect(() => {
        const getMedia = async () => {
            
        }
    }, []);


    return(
        <div>
            {/* <Nav /> */}
            <section>
                <h2>Track films you've watched.</h2>
                <h2>Save those you want to see.</h2>
                <h2>Tell your friends what's good.</h2>
            </section>
            
                {media.map( media => {
                    <>
                        <img>{media.img}</img>
                        <h2>{media.title}</h2>
                        <h5>{media.genre}</h5>
                    </>
            
                })}

        </div>
    );
    
    }
    
    export default Home