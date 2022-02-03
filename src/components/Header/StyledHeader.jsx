import styled from 'styled-components';

const greyColor = '#f3f3f3';
const light = '#fff';
const highlightPink = '#ea4c8966';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${light};
  height: 100px;
  width: 90%;
  padding: 0 5%;
  position: fixed;
  top: 0;
  z-index: 50;
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
    border: solid 2px ${highlightPink};
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
