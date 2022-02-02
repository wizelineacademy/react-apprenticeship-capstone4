import styled, { css } from 'styled-components';

const greyColor = '#f3f3f3';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  width: 90%;
  padding: 0 5%;
`;

export const LogoName = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  img {
    margin-right: 20px;
  }
`;

export const SearchBar = styled.div`
  background-color: ${greyColor};
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 10px;
  padding: 10px;
  width: 30%;
  &:hover {
    background-color: white;
    border: solid 2px #ea4c8966;
  }
  input[type='search'] {
    background-color: transparent;
    border: none;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
`;
