import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import "./contentResults.css"

function ContentResults({ mediaResults, clearSearchBar }) {
    const baseUrl = "https://image.tmdb.org/t/p/original"

    const navigate = useNavigate()
    function handleClick() {
        navigate('/NewReview')
    }


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
                    <Link to={"/MovieReviews/"} onClick={()=>{clearSearchBar()}}
                    state={{
                        mediaName: media.title || media.name, 
                        mediaImg: media.poster_path,
                        mediaRelease: media.release_date || media.first_air_date,
                        mediaDescription: media.overview,
                        mediaId: media.id
                    }} >


        <div id="search-results" className="card bg-dark">
            {mediaResults.results.map(media => (
                <div className="card-body contentCard" key={media.id}>
                    <Link to="../../Pages/MovieReviews">
                        <img className="card-img-top" src={baseUrl + media.poster_path} width="300" alt={media.title} />
                        <div>
                            <h1 className="card-title">{media.title || media.name}</h1>
                            {media.genre_ids.map((genre_id) => {
                                return (<h3>{getGenreName(genre_id)}</h3>)
                            })}
                            <h5 className="card-text">{media.release_date || media.first_air_date}</h5>
                            <p>{media.overview}</p>
                        </div>

                    </div>
                    <Link to={"/NewReview/"} onClick={()=>{clearSearchBar()}}
                    state={{
                        mediaName: media.title || media.name, 
                        mediaImg: media.poster_path,
                        mediaRelease: media.release_date || media.first_air_date,
                        mediaDescription: media.overview,
                        mediaId: media.id
                    }} 
                    >Leave a review</Link>

                </div>
            )
            )}
        </div>
    )

}




export default ContentResults;