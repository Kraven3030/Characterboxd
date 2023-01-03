import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'



// Imports for components and pages
import Nav from './components/Nav/nav'
import Home from './Pages/Home/index';
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import NewReview from './Pages/newReview/index';
import MovieReviews from './Pages/movieReviews/index'
import UsersReviews from './Pages/usersReviews/index';

import EditReview from './Pages/editReview/index';
import SearchResults from './components/SearchResults/SearchResults';
import SearchBar from './components/SearchBar/SearchBar';
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
      <body>
        <SearchBar className='results' />
      </body>
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

          <Route path="/EditReview" element={<EditReview />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
