import React from 'react';
import { Slide } from 'react-slideshow-image';
import SliderCard from './SliderCard.component';
import { useSelector } from 'react-redux';
import 'react-slideshow-image/dist/styles.css';
import './slider.style.css';
import { properties } from './constants/properties';

function Slider() {
  const { banners } = useSelector((state) => state.banners);

  return (
    <Slide data-testid="slider" className="slider-container" {...properties}>
      {banners.map((banner) => (
        <SliderCard key={banner.id} banner={banner} />
      ))}
    </Slide>
  );
}

export default Slider;
