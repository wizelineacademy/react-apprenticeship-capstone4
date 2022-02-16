import styled from 'styled-components';

export const ProductsContainer = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const ProductsImage = styled.img`
  border-radius: 32px;
  margin: 32px;
  height: 60vh;
  width: 60vw;

  @media (max-width: 425px) {
    margin-top: 100px;
    height: 30vh;
    width: 60vw;
  }
`;

export const ProductsButton = styled.button`
  background-color: rgb(247, 247, 247);
  margin: 32px;
  width: 168px;
  height: 60px;
  border-radius: 16px;
  border-style: none;
  cursor: pointer;
  color: rgb(199, 130, 27);
  font-size: 24px;
  font-family: 'lobster', cursive;
  box-shadow: 0 16px 24px rgba(199, 130, 27, 0.19),
    0 32px 32px rgba(199, 130, 27, 0.23);
`;
