import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios'
import { useState } from 'react'


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




  return (
    <div className="main_page">
      <nav>

        <Login />
        <Signup />
        <SearchBar />
      </nav>
      <main>
        <Routes>
          <Route path="/Login/login" element={<Login />} />
          <Route path="/Signup/Signup" element={<Signup />} />
          {/* { Page Routes  } */}
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
