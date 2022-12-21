import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'

// Imports for components and pages
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import SearchBar from './components/SearchBar/SearchBar';


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

        <SearchBar />
       
      </nav>
      <main>
        <Routes>
          <Route path="/Login/login" element={<Login />} />
          <Route path="/Signup/Signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
