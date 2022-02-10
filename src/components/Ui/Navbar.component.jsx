import React from 'react';
import './navbar.styles.css';
import logo from '../../assets/logo.png';
function Navbar() {
  return (
    <nav className="navbar-container">
      <img role="logo" className="navbar-logo" src={logo} alt="Logo" />
      <input className="navbar-search" placeholder=" Search" />
      <a className="navbar-cart" href="/auth/login">
        <i className="fas fa-shopping-cart"></i>
        <label className="navbar-cart-items">3</label>
      </a>
    </nav>
  );
}

export default Navbar;
