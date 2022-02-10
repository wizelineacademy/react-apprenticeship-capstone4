import React from 'react';
import logo from '../../assets/logo.png';
import { useRouterContext } from '../../providers/Router.provider';
import {
  Header,
  HeaderCart,
  HeaderCartItem,
  HeaderLogo,
  HeaderSearch,
} from './themes/navbar.styles';
function Navbar() {
  const {
    router: { navigate },
  } = useRouterContext();
  const handleButton = () => {
    navigate('/home', navigate);
  };
  return (
    <Header>
      <HeaderLogo
        data-testid="logo"
        onClick={handleButton}
        src={logo}
        alt="Logo"
      />
      <HeaderSearch placeholder=" Search" />
      <HeaderCart>
        <i className="fas fa-shopping-cart"></i>
        <HeaderCartItem>3</HeaderCartItem>
      </HeaderCart>
    </Header>
  );
}

export default Navbar;
