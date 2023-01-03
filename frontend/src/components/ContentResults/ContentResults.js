import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./contentResults.css"

function ContentResults({ mediaResults }) {
    const baseUrl = "https://image.tmdb.org/t/p/original"




    const media_genres = [
        {
            "id": 10759,
            "name": "Action & Adventure"
        },
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 10762,
            "name": "Kids"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10763,
            "name": "News"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 10764,
            "name": "Reality"
        },

        {
            "id": 10766,
            "name": "Soap"
        },
        {
            "id": 10767,
            "name": "Talk"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10765,
            "name": "Sci-Fi & Fantasy"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 10768,
            "name": "War & Politics"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
    function getGenreName(genre_id) {
        for (var i = 0; i < media_genres.length; i++) {
            if (media_genres[i].id === genre_id) {
                return (media_genres[i].name);
            }
        }
    }


    return (
        <div className="card">
            {mediaResults.results.map(media => (
                <div className="card-body" key={media.id}>
                    <Link to={`/media/${media.id}`}>

                        <img
                            className="card-img-top"
                            src={`${baseUrl + media.poster_path}`} alt="" />
                    </Link>
                    <div className="">
                        <h3 className="card-title">{media.title || media.name}</h3>
                        <span className="media__release">{media.release_date || media.first_air_date}</span>
                        <div className="media__genres">
                            {media.genre_ids.map(genre => (
                                <span className="media__genre" key={genre}>{getGenreName(genre)}</span>
                            ))}
                        </div>
                    </div>
                    <Link to="/NewReview/">Leave a review</Link>
                </div>
            
            )
            
            )
            
            }
        
        </div>
    )


}




export default ContentResults;