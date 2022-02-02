import React from 'react';

function Slider({ sliderItems }) {
  // eslint-disable-next-line react/no-unstable-nested-components
  function SliderList() {
    return (
      <ul>
        {sliderItems.map((item) => (
          <img
            key={item.id}
            src={item.data.main_image.url}
            alt={item.data.main_image.alt}
          />
        ))}
      </ul>
    );
  }
  return (
    <div>
      <h2>Slider</h2>
      <SliderList />
    </div>
  );
}

export default Slider;
