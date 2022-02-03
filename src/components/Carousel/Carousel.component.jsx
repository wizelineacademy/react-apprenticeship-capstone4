import React from 'react';

function Carousel({ carouselItems }) {
  // eslint-disable-next-line react/no-unstable-nested-components
  function CarouselList() {
    return (
      <ul>
        {carouselItems.map((item) => (
          <img
            key={item.id}
            src={item.data.mainimage.url}
            alt={item.data.mainimage.alt}
            width="200px"
          />
        ))}
      </ul>
    );
  }
  return (
    <div>
      <h2>Carousel</h2>
      <CarouselList />
    </div>
  );
}

export default Carousel;
