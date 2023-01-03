import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



// Imports for components and pages
import Nav from './components/Nav/nav'
import Home from './Pages/Home/index';
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import NewReview from './Pages/NewReview/index';
import MovieReviews from './Pages/MovieReviews/index'
import UsersReviews from './Pages/UsersReviews/index';
// import EditReview from './Pages/EditReview/index';
import SearchResults from './components/SearchResults/SearchResults';
import SearchBar from './components/SearchBar/SearchBar';
// import ContentResults from './components/ContentResults/ContentResults';
// import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true)
    }
  }, [])


  return (
    <>
      <header className='bg-dark'>
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <SearchBar className='results' />
      </header>
      <main>
        <Routes>
          {/* { Page Routes  } */}
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/MovieReviews" element={<MovieReviews />} />
          <Route path="/UsersReviews" element={<UsersReviews />} />
          <Route path="/NewReview" element={<NewReview />} />
        </Routes>
      </main>
    </>
  );
}

export default App;