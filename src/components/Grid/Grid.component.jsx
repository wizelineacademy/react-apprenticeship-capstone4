import React from 'react';
import { BsDot } from 'react-icons/bs';
import {
  GridContainer,
  ItemList,
  ItemContainer,
  InfoContainer,
} from './StyledGrid';

function Grid({ gridItems }) {
  // eslint-disable-next-line react/no-unstable-nested-components
  function GridList() {
    return (
      <div>
        <ItemList>
          {gridItems.map((item) => (
            <ItemContainer key={item.id}>
              <img
                src={item.data.mainimage.url}
                alt={item.data.mainimage.alt}
              />
              <InfoContainer>
                <p className="title">{item.data.name}</p>
                <p>
                  <BsDot />
                  <b>Category: </b>
                  {item.data.category.slug}
                </p>
                <p>
                  <BsDot />
                  <b>Price: </b>${item.data.price}
                </p>
              </InfoContainer>
            </ItemContainer>
          ))}
        </ItemList>
      </div>
    );
  }
  return (
    <GridContainer>
      <h2>Grid</h2>
      <GridList />
    </GridContainer>
  );
}

export default Grid;
