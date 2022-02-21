import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: relative;
  left: 44%;
  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @keyframes fade {
    50% {
      left: 48%;
      opacity: 0.5;
    }
  }
`;

export const Alert = styled.label`
  background-color: black;
  font-family: 'lobster', cursive;
  font-size: 24px;
  font-weight: bold;
  padding: 0 24px 0 24px;
  border-radius: 16px;
`;
