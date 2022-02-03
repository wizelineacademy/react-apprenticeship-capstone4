import React from 'react';
import { CarouselContainer, ItemContainer } from './StyledCarousel';

function Carousel({ carouselItems }) {
  // eslint-disable-next-line react/no-unstable-nested-components
  function CarouselList() {
    return (
      <div>
        <h3>Living Room</h3>
        <ul>
          {carouselItems.map(
            (item) =>
              item.tags[0] === 'Living Room' && (
                <ItemContainer key={item.id}>
                  <img
                    src={item.data.mainimage.url}
                    alt={item.data.mainimage.alt}
                  />
                </ItemContainer>
              )
          )}
        </ul>
        <h3>Bedroom</h3>
        <ul>
          {carouselItems.map(
            (item) =>
              item.tags[0] === 'Bedroom' && (
                <ItemContainer key={item.id}>
                  <img
                    src={item.data.mainimage.url}
                    alt={item.data.mainimage.alt}
                  />
                </ItemContainer>
              )
          )}
        </ul>
      </div>
    );
  }
  return (
    <CarouselContainer>
      {/* Nota: Esto es solo para referencia, el unico h2 deberia ser el de Categories */}
      <h2>Carousel/Grid:</h2>
      <h2>Categories</h2>
      <CarouselList />
    </CarouselContainer>
  );
}

export default Carousel;
