import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import logo from '../../logo.svg';
import { HeaderContainer, LogoName, SearchBar } from './StyledHeader';

function Header() {
  const [searchText, setSearchText] = useState('');

  return (
    <HeaderContainer>
      <LogoName>
        <img src={logo} alt="logo" width="30" height="30" />
        <h1>Ecommerce Store</h1>
      </LogoName>
      <SearchBar>
        <BiSearch />
        <input
          type="search"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </SearchBar>
      <FiShoppingCart />
    </HeaderContainer>
  );
}

export default Header;
