import React from 'react';
import './navbar.css';
import logo from './assets/logo.png'

function Navbar() {
    return (
      <nav className="navbar">
        <img src={logo} alt="" />
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/nosotros" className="nav-link">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a href="/servicios" className="nav-link">
              Servicie
            </a>
          </li>
          <li className="nav-item">
            <a href="/contacto" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }

 
  
  
  export default Navbar;
  
  
  
  
  