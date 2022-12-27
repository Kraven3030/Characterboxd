import { useState, useEffect } from 'react'
import Login from '../../components/Login/login'
import Signup from '../Signup/signup'
import SearchBar from '../../components/SearchBar/SearchBar';

import { Link } from "react-router-dom";


import './nav.css'


function Nav(props) {

  const initialState = [<h1 key="1"><Link to="/"><ion-icon name="film-outline"></ion-icon>CharacterBoxd</Link></h1>]

  const handleLogOut = () => {
    localStorage.clear()
    props.setIsLoggedIn(false)
  }

  const [navItems, setNavItems] = useState(initialState)

  useEffect(() => {
    if (props.isLoggedIn) {
      setNavItems(initialState.concat(
        <li key="2"><button onClick={handleLogOut}>Logout</button></li>
      ))
    } else {
      setNavItems(initialState.concat([
        <li key="3"><Link className='' to='/login'>Login</Link></li>,
        <li key="4"><Link className='' to='/signup'>Signup</Link></li>
      ]))
    }
  }, [props.isLoggedIn])

  return (
    <header>
      <nav className="">
        <div className=''>
          <ul className=''>
            <li className=''>
              {navItems}
            </li>
          </ul>
        </div>
      </nav>
      <SearchBar />
    </header>
  );
}
export default Nav