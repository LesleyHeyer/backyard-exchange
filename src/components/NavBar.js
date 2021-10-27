import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
 <div>
     <h1>Backyard Exchange</h1>
        <ul>
        <Link to="/" className="link"><li>Home</li></Link>
        <Link to="/About" className="link"><li>About</li></Link>
        <Link to="/Gallery" className="link"><li>Gallery</li></Link>
        </ul>
</div>
     
    )
}

export default NavBar;