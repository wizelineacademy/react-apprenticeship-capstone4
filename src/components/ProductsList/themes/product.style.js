import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductContainer = styled(Link)`
  background-color: black;
  margin: 16px;
  border-radius: 16px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.19), 0 32px 32px rgba(0, 0, 0, 0.23);
  width: 320px;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 320;
  }
`;

export const ProductImage = styled.img`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  height: 360px;
  width: 320px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 32px;
`;

export const ProductTitle = styled.label`
  font-family: 'lobster', cursive;
`;

export const ProductPrice = styled.label`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  color: black;
  background-color: white;
  width: 100px;
  border-radius: 24px;
`;

export const CartButton = styled.button`
  background-color: white;
  cursor: pointer;
  border: none;
  margin-top: 8px;
  align-self: flex-start;
  border-radius: 8px;
`;
