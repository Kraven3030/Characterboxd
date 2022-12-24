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


  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showform, setShowForm] = useState({})

  const handleSubmit = async (e, formData) => {
    e.preventDefault()
    const { data } = await axios.post(`http://localhost:9000/user/${formData.endpoint}`, {
      username: formData.username,
      password: formData.password
    })
    localStorage.token = data.token
    setIsLoggedIn(true)
  }

  //LOGOUT BUTTON FUNCTION
  const handleLogOut = () => {
    localStorage.clear()
    setIsLoggedIn(false)
  }



  return (
    <div className="main_page">
      <div>
        <Nav />
      </div>
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
