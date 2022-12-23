import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { createAccount, loginToAccount } from './utils/api'
import axios from 'axios'


// Imports for components and pages
import Nav from './components/Nav/nav'
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import MovieReviews from './Pages/movieReviews/index'
import UsersReviews from './Pages/usersReviews/index';
import NewReview from './Pages/newReview/index';
import EditReview from './Pages/editReview/index';
import Home from './Pages/Home';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  // const handleSubmit = async (e, formData) => {
  //   e.preventDefault();
  //   createAccount(formData)
  //     .then(data => {
  //       localStorage.token = data.token
  //       localStorage.userId = data.user._id
  //       loginToAccount(localStorage.userId)
  //         .then(data => console.log("Hello!"))
  //     })
  // }


  return (
    <div className="main_page">
      <div>
        <Nav />
      </div>
      <main>
        <Routes>
          <Route path="/Login/login" element={<Login />} />
          <Route path="/Signup/Signup" element={<Signup />} />
          {/* Page Routes  */}
          <Route path="/" element={<Home />} />
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
