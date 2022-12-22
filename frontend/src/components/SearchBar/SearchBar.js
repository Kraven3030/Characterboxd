import React from 'react';
import { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';

function SearchBar() {
    const [mediaResults, setMediaResults] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [mediaType, setMediaType] = useState("movie")

    const queryOptions = {
        api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
        api: 'https://api.themoviedb.org/3/search',
        endpoint: `/${mediaType}`
    };
    function handleChange(event) {
        setSearchString(event.target.value)
        if (searchString !== '') {
            getMedia(searchString)
        }
    }

    function setMediaRadio(event) {
        setMediaType(event.target.id)
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
    return (
        <div>
            <form className="searchBar">
                <input
                    className='searchInput'
                    name="searchString"
                    type="text"
                    placeholder="Search for a Movie or TV Show"
                    onChange={handleChange}
                    value={searchString}
                >

                </input>
                <input 
                    className='radioBtn' 
                    type="radio" 
                    id="movie" 
                    name="media" 
                    value="Movie" 
                    onChange={setMediaRadio} 
                    checked={mediaType === "movie"} required
                >
                </input>
                <label htmlFor='movie'>Movies</label>
                <input 
                    className='radioBtn' 
                    type="radio" 
                    id="tv" 
                    name="media" 
                    value="TV" 
                    onChange={setMediaRadio} 
                    required
                >
                </input>
                <label htmlFor='tvShow'>TV</label>
            </form>
            <SearchResults mediaResults={mediaResults}
                 mediaType={mediaType} />
        </div>
    )
}

export default SearchBar