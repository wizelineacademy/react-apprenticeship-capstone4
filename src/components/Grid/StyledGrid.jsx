import styled from 'styled-components';

const highlightPink = '#ea4c8966';
const greyColor = '#f3f3f3';

export const GridContainer = styled.div`
  img {
    width: 150px;
  }
  p {
    font-size: 0.5em;
    text-align: left;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
`;

export const ItemList = styled.ul`
  display: flex;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  justify-content: center;
  flex-wrap: wrap;

  width: 80%;
  margin: 0;
  padding: 0 10%;
  position: relative;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  background-color: white;
  &:hover {
    opacity: 0.8;
  }
`;

export const InfoContainer = styled.data`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  padding: 10px 0 10px 10px;
  width: 200px;
  .title {
    font-size: 0.8em;
    font-weight: bold;
  }
`;
