import React from "react";
import './NavBar.css';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom/cjs/react-router-dom.min";
// import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
<Router>
 <div>
     <h1>Backyard Exchange</h1>
    <Switch>
        <ul>
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/About" className="link">About</Link></li>
        <li><Link to="/Gallery" className="link">Gallery</Link></li>
        <li><Link to="" className="link">Contact</Link></li>
        </ul>
    </Switch>
</div>
</Router>
     
    )
}

export default NavBar;