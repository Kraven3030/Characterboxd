import { useState, useEffect } from 'react'
import Login from '../../components/Login/login'
import Signup from '../Signup/signup'
import { Link } from "react-router-dom";


import './nav.css'


function Nav(props) {

  const initialState = [<h1 key="1"><Link to="/">CharacterBoxd</Link></h1>]

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
        <li key="3"><Link to='/login'>Login</Link></li>,
        <li key="4"><Link to='/signup'>Signup</Link></li>
      ]))
    }
  }, [props.isLoggedIn])

  return (
    <nav>
      <div>
        <ul className='allNavItems'>
          {navItems}
        </ul>
      </div>
    </nav>
  );
}
export default Nav