import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import './nav.css'


function Nav() {
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

        <SearchBar />
      </header>
    </div>
  );
}
export default Nav