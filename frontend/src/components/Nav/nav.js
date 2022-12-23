import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import './nav.css'


function Nav(props) {


  return (
    <div>
      <nav className="nav">
        <div className="title">CharacterBoxd</div>
        <Link to='/Login/login'>Login</Link>
        <Link to='/Signup/signup'>Create Account</Link>
      </nav>
      <SearchBar />
    </div>
  );
}
export default Nav