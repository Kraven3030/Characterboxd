import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";


import './nav.css'


function Nav(props) {
  const navigate = useNavigate();
  const initialState = [<h1 className='nav-title' key="1"><Link to="/"><ion-icon name="film-outline"></ion-icon>CharacterBoxd</Link></h1>]

  const handleLogOut = () => {
    localStorage.clear();
    props.setIsLoggedIn(false);
    navigate("/", { replace: true });
  }

  const [navItems, setNavItems] = useState(initialState)

  useEffect(() => {
    if (props.isLoggedIn) {
      setNavItems(
        initialState.concat(


          <li className="nav-item" key="7">
            <Link className='nav-link' to="/UsersReviews/">My Reviews</Link>
          </li>,
          <li key="2">
            <button className="btn btn-danger" onClick={handleLogOut}>
              Logout
            </button>
          </li>
        )
      );
    } else {
      setNavItems(
        initialState.concat([

          <li className="nav-item" key="3">
            <Link className='nav-link' to="/login">Login</Link>
          </li>,
          <li className="nav-item" key="4">
            <Link className='nav-link' to="/signup">Signup</Link>
          </li>,
        ])
      );
    }
  }, [props.isLoggedIn])

  return (
    <div>
      <header className='bg-dark' >
        <ul className='nav justify-content-center'>
          {navItems}
        </ul>

      </header>

    </div>
  );
}
export default Nav