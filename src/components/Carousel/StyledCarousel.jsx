import styled from 'styled-components';

export const CarouselContainer = styled.div`
  ul {
    display: flex;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

    width: 80%;
    margin: 0;
    padding: 0 10%;
    position: relative;
  }
  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
  }
  p {
    font-size: 1em;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  margin-bottom: 50px;
  &:hover {
    opacity: 0.5;
  }
`;
