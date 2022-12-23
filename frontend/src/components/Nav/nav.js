import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import './nav.css'


function Nav(props) {



  return (
    <div>
      <header className="nav">
        <div className="title">CharacterBoxd</div>

        <div><Link className="nav-item" to="/">Home
        </Link></div>

        <div><Link className="nav-item" to="/Login/login">Login
        </Link></div>

        <div><Link className="nav-item" to="/Signup/signup">Create Account
        </Link></div>

      </header>
      <SearchBar />
    </div>
  );
}
export default Nav