import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../../logo.svg';

function Header() {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" width="50" height="50" />
        <h1>Ecommerce Store</h1>
      </div>
      <input type="search" name="" id="" />
      <FiShoppingCart />
    </div>
  );
}

export default Header;
