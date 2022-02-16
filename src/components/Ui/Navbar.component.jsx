import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import queryString from 'query-string';

import {
  Header,
  HeaderCart,
  HeaderCartItem,
  HeaderLogo,
  HeaderLogoLink,
  HeaderSearch,
} from './themes/navbar.styles';
import { useForm } from '../../utils/hooks/useForm/useForm';
import { useSearchProducts } from '../../utils/hooks/useSearchProducts';
function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [{ product }, handleInputChange] = useForm({
    product: q,
  });
  useSearchProducts(q);
  const handleSearch = (e) => {
    e.preventDefault();
    if (product.trim().length <= 1) {
      return;
    }
    history.push('/search');
    history.push(`?q=${product}`);
  };
  return (
    <Header>
      <HeaderLogoLink to="/home">
        <HeaderLogo data-testid="logo" src={logo} alt="Logo" />
      </HeaderLogoLink>
      <form onSubmit={handleSearch}>
        <HeaderSearch
          type="text"
          name="product"
          placeholder="
          Search"
          onChange={handleInputChange}
        />
      </form>
      <HeaderCart to="/">
        <i className="fas fa-shopping-cart"></i>
        <HeaderCartItem>3</HeaderCartItem>
      </HeaderCart>
    </Header>
  );
}

export default Navbar;
