import React from 'react';
import { CarouselContainer, ItemContainer } from './StyledCarousel';

function Carousel({ carouselItems }) {
  // eslint-disable-next-line react/no-unstable-nested-components
  function CarouselList() {
    return (
      <ul>
        {carouselItems.map((item) => (
          <ItemContainer key={item.id}>
            <img
              src={item.data.main_image.url}
              alt={item.data.main_image.alt}
            />
            <p>{item.data.name}</p>
            {/* Todo: el mock file que cada componente esta utilizando es el incorrecto, checa las especificaicones del proyecto para que veas cual es el indicado */}
          </ItemContainer>
        ))}
      </ul>
    );
  }
  return (
    <CarouselContainer>
      {/* Nota: Esto es solo para referencia, el unico h2 deberia ser el de "Categories" */}
      <h2>Carousel/Grid:</h2>
      <h2>Categories</h2>
      <CarouselList />
    </CarouselContainer>
  );
}

export default Carousel;
