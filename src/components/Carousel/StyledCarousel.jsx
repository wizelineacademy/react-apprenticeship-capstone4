import styled from 'styled-components';

export const CarouselContainer = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    width: 80%;
    margin: 0;
    padding: 0 10%;
    position: relative;
  }
  img {
    border-radius: 10px 10px 0 0;
    width: 200px;
  }
`;

export const ItemContainer = styled.div`
  border-radius: 10px;
  margin-bottom: 50px;
  &:hover {
    opacity: 0.5;
  }
`;
