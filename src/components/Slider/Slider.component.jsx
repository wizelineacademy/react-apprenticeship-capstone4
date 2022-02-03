import React, { useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { SliderContainer } from './StyledSlider';

function Slider({ sliderItems }) {
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line prefer-destructuring
  const length = sliderItems.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  function SliderList() {
    return (
      <ul>
        <IoIosArrowDropleft className="leftArrow" onClick={prevSlide} />
        <IoIosArrowDropright className="rightArrow" onClick={nextSlide} />
        {sliderItems.map(
          (item, index) =>
            index === current && (
              <img
                key={item.id}
                src={item.data.main_image.url}
                alt={item.data.main_image.alt}
              />
            )
        )}
      </ul>
    );
  }
  return (
    <SliderContainer>
      <h2>Slider</h2>
      <SliderList />
    </SliderContainer>
  );
}

export default Slider;
