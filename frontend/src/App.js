import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'


// Imports for components and pages
import Nav from './components/Nav/nav'
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import MovieReviews from './Pages/movieReviews/index'
import UsersReviews from './Pages/usersReviews/index';
import NewReview from './Pages/newReview/index';
import EditReview from './Pages/editReview/index';
import Home from './Pages/Home/index';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="main_page">
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        <Routes>
          {/* { Page Routes  } */}
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/movieReviews/index" element={<MovieReviews />} />
          <Route path="/usersReviews/index" element={<UsersReviews />} />
          <Route path="/newReview/index" element={<NewReview />} />
          <Route path="/editReview/index" element={<EditReview />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
