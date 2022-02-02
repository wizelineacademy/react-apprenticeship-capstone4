import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../../logo.svg';

function Header() {
  return (
    <div>
      <img src={logo} alt="logo" width="50" height="50" />
      <input type="search" name="" id="" />
      <FiShoppingCart />
    </div>
  );
}

export default Header;
