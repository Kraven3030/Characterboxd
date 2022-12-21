import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function SearchBar() {
const [mediaResults, setMediaResults] = useState([]);
const [searchString, setSearchString] = useState('');
const [mediatType, setMediaType] = useState("movie")

const queryOptions = {
    api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
    api: 'https://api.themoviedb.org/3/search',
    endpoint: `/${mediatType}`
};
useEffect(() => {
    //getMedia(searchString)
})
function handleChange(event) {
    console.log(event.target.value)
    setSearchString(event.target.value)
        if (searchString !== ''){
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
    console.log(response);
}
)
}
return (
    <div>
        <form className="searchbar">
            <label htmlFor='searchInput'>Search for a Movie or TV Show</label>
            <input 
                name="searchInput"
                type="text"
                placeholder="Search"
                onChange={handleChange}
                value={searchString}
            ></input>
            <label htmlFor='movie'>Movie</label>
            <input type="radio" id="movie" name="media" value="Movie" onChange={setMediaRadio} checked={mediatType==="movie"}></input>
            <label htmlFor='tvShow'>TV</label>
            <input type="radio" id="tv" name="media" value="TV" onChange={setMediaRadio}></input>
        </form>
    </div>
)
}

export default SearchBar