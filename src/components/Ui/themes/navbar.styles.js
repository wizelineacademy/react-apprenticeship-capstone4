import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.nav`
  position: fixed;
  display: flex;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: 100vw;
`;

export const HeaderLogoLink = styled(Link)`
  height: 90px;
  width: 90px;
`;

export const HeaderLogo = styled.img`
  height: 90px;
  width: 90px;
`;

export const HeaderSearch = styled.input`
  background-color: white;
  color: black;
  width: 308px;
  height: 40px;
  outline: none;
  border-style: solid;
  border-color: rgb(209, 209, 209);
  border-radius: 8px;
  margin: 8px;

  @media (max-width: 425px) {
    margin-top: 16px;
    margin-right: 16px;
  }
`;

export const HeaderCart = styled(Link)`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 32px;
  border-radius: 24px;
  width: 72px;
  padding: 8px;

  @media (max-width: 425px) {
    margin-top: 16px;
    margin-right: 16px;
  }
`;

export const HeaderCartItem = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const Search = styled.button`
  background-color: black;
  color: white;
  font-family: 'lobster', cursive;
  border-radius: 8px;
  border-style: solid;
  cursor: pointer;
`;
