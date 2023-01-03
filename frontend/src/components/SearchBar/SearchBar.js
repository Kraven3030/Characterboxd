import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import SearchResults from '../SearchResults/SearchResults';
import './searchbar.css'

function SearchBar() {
    const [mediaResults, setMediaResults] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [mediaType, setMediaType] = useState("movie");
    const navigate = useNavigate();


    useEffect(() => {
        if (searchString !== '') {
            getMedia(searchString)
        } else {
            setMediaResults([]);
        }
    }, [searchString, mediaType]
    );

    const queryOptions = {
        api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
        api: 'https://api.themoviedb.org/3/search',
        endpoint: `/${mediaType}`
    };

    const handleChange = async (event) => {
        setSearchString(event.target.value)
    }

    function setMediaRadio(event) {
        setMediaType(event.target.id);
        getMedia(searchString);
    }

    function getMedia(searchString) {
        const url = `${queryOptions.api}${queryOptions.endpoint}?api_key=${queryOptions.api_key}&query=${searchString}`;
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                setMediaResults(response);
            }
            )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate.push(`/search-results?query=${searchString}`)
    }

    return (
        <div className='search-box'>
            <form onSubmit={handleSubmit}>
                <input
                    className='search-text'
                    name="searchString"
                    type="text"
                    placeholder="Search for a Movie or TV Show"
                    onChange={handleChange}
                    value={searchString}>
                </input>

                <input
                    className='radioBtn'
                    type="radio"
                    id="movie"
                    name="media"
                    value="Movie"
                    onChange={setMediaRadio}
                    checked={mediaType === "movie"} required>
                </input>
                <label htmlFor='movie'>Movies</label>

                <input
                    className='radioBtn'
                    type="radio"
                    id="tv"
                    name="media"
                    value="TV"
                    onChange={setMediaRadio}
                    required>
                </input>
                <label htmlFor='tvShow'>TV</label>
            </form>
            <SearchResults mediaResults={mediaResults}
                mediaType={mediaType}
                searchString={searchString} />
        </div>
    )
}

export default SearchBar