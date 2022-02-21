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
  Search,
} from './themes/navbar.styles';
import { useForm } from '../../utils/hooks/useForm/useForm';
import { useSearchProducts } from '../../utils/hooks/useSearchProducts';
import { useDispatch, useSelector } from 'react-redux';
import { resultsProducts } from '../../actions/products';
function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { numberProducts } = useSelector((state) => state.cart);
  const { q = '' } = queryString.parse(location.search);
  const [{ product }, handleInputChange] = useForm({
    product: q,
  });
  const { data } = useSearchProducts(product);
  const handleSearch = (e) => {
    e.preventDefault();
    if (product.trim().length <= 1) {
      return;
    }
    dispatch(resultsProducts(data));
    history.push('/search');
    history.push(`?q=${product}`);
  };
  return (
    <Header>
      <HeaderLogoLink to="/home">
        <HeaderLogo data-testid="logo" src={logo} alt="Logo" />
      </HeaderLogoLink>
      <form>
        <HeaderSearch
          type="text"
          name="product"
          placeholder="
          Search"
          onChange={handleInputChange}
        />
        <Search onClick={handleSearch}>Search</Search>
      </form>
      <HeaderCart to="/cart">
        <i className="fas fa-shopping-cart"></i>
        <HeaderCartItem>{numberProducts}</HeaderCartItem>
      </HeaderCart>
    </Header>
  );
}

export default Navbar;
