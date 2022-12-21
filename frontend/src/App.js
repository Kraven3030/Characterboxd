import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'

// Imports for components and pages
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import MovieReviews from './Pages/MovieReviews';
import UsersReviews from './Pages/UsersReviews';
import NewReview from './Pages/NewReview';
import EditReview from './Pages/EditReview';
import Home from './Pages/Home';



function App() {


  return (
    <div className="nav">
      <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link className='loginLink' to="/Login/login">
          <h1>Login</h1>
        </Link>
        <Link to="/Signup/signup">
          <h1 className='signupLink'>Signup</h1>
        </Link>
      </nav>
      <main>
        <Routes>
          {/* Component Routes */}
          <Route path="/Login/login" element={<Login />} />
          <Route path="/Signup/Signup" element={<Signup />} />
          {/* Page Routes  */}
          <Route path="/" element={<Home />} />
          <Route path="/MovieReviews/index" element={<MovieReviews />} />
          <Route path="/UsersReviews/index" element={<UsersReviews />} />
          <Route path="/NewReview/index" element={<NewReview />} />
          <Route path="/EditReview/index" element={<EditReview />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
