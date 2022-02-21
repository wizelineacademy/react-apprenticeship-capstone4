import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  Buy,
  CheckoutButtons,
  GoBack,
  ProceedCheckout,
  Total,
  TotalCartContainer,
  TotalPriceTitle,
} from './themes/totalcart.style';

function TotalCart() {
  const { pathname } = useLocation();
  const { total } = useSelector((state) => state.cart);
  return (
    <TotalCartContainer>
      <TotalPriceTitle>Total:</TotalPriceTitle>
      <Total>${total}</Total>
      {pathname === '/checkout' ? (
        <CheckoutButtons>
          <GoBack to="/cart">Go Back</GoBack>
          <Buy to="/">Buy</Buy>
        </CheckoutButtons>
      ) : (
        <ProceedCheckout to="/checkout">Proceed to checkout</ProceedCheckout>
      )}
    </TotalCartContainer>
  );
}

export default TotalCart;
