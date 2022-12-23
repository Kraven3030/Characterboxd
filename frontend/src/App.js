import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { createAccount, loginToAccount } from './utils/api'
import axios from 'axios'


// Imports for components and pages
import Nav from './components/Nav/nav'
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import MovieReviews from './Pages/MovieReviews/index'
import UsersReviews from './Pages/UsersReviews/index';
import NewReview from './Pages/NewReview/index';
import EditReview from './Pages/EditReview/index';
import Home from './Pages/Home';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [isLoggedIn, setLogInStatus] = useState(false)

  useEffect(() => {
    if (localStorage.token) {
      setLogInStatus(true)
    }
  }, [])

  const handleSubmit = async (e, signupForm) => {
    e.preventDefault();
    createAccount(signupForm)
      .then(data => {
        localStorage.token = data.token
        //localStorage.userId = data.user._id
        //loginToAccount(localStorage.userId)
        //.then(data => console.log("Hello!"))
      })
  }


  return (
    <div className="main_page">
      <div>
        <Nav isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} />
      </div>
      <main>
        <Routes>
          <Route path="/Login/login" element={<Login />} />
          <Route path="/Signup/Signup" element={<Signup handleSubmit={handleSubmit} />} />
          {/* Page Routes  */}
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} />} />
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
