import { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar';

import { Link } from "react-router-dom";


import './nav.css'


function Nav(props) {

  const initialState = [<h1 className='' key="1"><Link to="/"><ion-icon name="film-outline"></ion-icon>CharacterBoxd</Link></h1>]

  const handleLogOut = () => {
    localStorage.clear()
    props.setIsLoggedIn(false)
  }

  const [navItems, setNavItems] = useState(initialState)

  useEffect(() => {
    if (props.isLoggedIn) {
      setNavItems(
        initialState.concat(
          <li className="navitem" key="5">
            <Link to="/">Homepage</Link>
          </li>,
          <li className="navitem" key="6">
            <Link to="/NewReview/">Leave a review</Link>
          </li>,
          <li className="navitem" key="7">
            <Link to="/UsersReviews/">My Reviews</Link>
          </li>,
          <li key="2">
            <button className="logoutButton" onClick={handleLogOut}>
              Logout
            </button>
          </li>
        )
      );
    } else {
      setNavItems(
        initialState.concat([
          <li className="navitem" key="5">
            <Link to="/">Homepage</Link>
          </li>,
          <li className="navitem" key="3">
            <Link to="/login">Login</Link>
          </li>,
          <li className="navitem" key="4">
            <Link to="/signup">Signup</Link>
          </li>,
        ])
      );
    }
  }, [props.isLoggedIn])

  return (
    <div>
      <header className='siteHeader'>
        <ul className='nav-links'>
          {navItems}
        </ul>
      </header>

    </div>
  );
}
export default Nav