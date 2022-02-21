import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TotalCartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 124px;
`;

export const TotalPriceTitle = styled.label`
  font-size: 24px;
  font-family: 'lobster', cursive;
  margin-right: 8px;
`;

export const Total = TotalPriceTitle;

export const CheckoutButtons = styled.div`
  display: flex;
`;

export const ProceedCheckout = styled(Link)`
  background-color: black;
  color: white;
  font-family: 'lobster', cursive;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  padding: 0 8px 0 8px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const GoBack = ProceedCheckout;
export const Buy = ProceedCheckout;
