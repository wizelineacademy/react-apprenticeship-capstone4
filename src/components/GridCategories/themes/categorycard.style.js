import styled from 'styled-components';

export const CCContainer = styled.div`
  background: black;
  border-radius: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
  color: white;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.19), 0 32px 32px rgba(0, 0, 0, 0.23);
`;

export const CCImage = styled.img`
  border-radius: 16px;
  height: 300px;
  width: 400px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  @media (max-width: 425px) {
    height: 300px;
    width: 320px;
  }
`;

export const CCTitle = styled.div`
  background-color: black;
  border-radius: 16px;
  padding: 8px;
  font-family: 'lobster', cursive;

  @media (max-width: 425px) {
    background-color: black;
    border-radius: 16px;
    padding: 8px;
  }
`;
