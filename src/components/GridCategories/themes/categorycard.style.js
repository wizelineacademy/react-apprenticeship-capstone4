import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CCContainer = styled.div`
  background: black;
  border-radius: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
  color: white;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.19), 0 32px 32px rgba(0, 0, 0, 0.23);
`;

export const CCImage = styled.img`
  height: 300px;
  width: 400px;
  border-radius: 16px 0;

  @media (max-width: 425px) {
    height: 300px;
    width: 320px;
  }
`;

export const CCTitle = styled(Link)`
  display: flex;
  justify-content: center;
  background-color: black;
  border-radius: 16px;
  padding: 8px;
  font-family: 'lobster', cursive;
`;
