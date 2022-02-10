import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: rgb(0, 0, 0);
  margin: 16px;
  border-radius: 16px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.19), 0 32px 32px rgba(0, 0, 0, 0.23);
  width: 320px;

  @media (max-width: 425px) {
    width: 320;
  }
`;

export const CardImage = styled.img`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  height: 360px;
  width: 320px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 32px;
`;

export const CardTitle = styled.label`
  font-family: 'lobster', cursive;
`;

export const CardPrice = styled.label`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  color: black;
  background-color: white;
  width: 100px;
  border-radius: 24px;
`;
