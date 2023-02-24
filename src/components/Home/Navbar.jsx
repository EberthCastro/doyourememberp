import React from 'react';
import '../../styles/navbar.css';
import logo from '../../assets/rememberLogo.png'
import { Link } from "react-router-dom";
import Home from './Home';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logoHeader" src={logo} alt="Logo Do you Remember" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}




export default Navbar;




