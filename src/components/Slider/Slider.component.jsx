import React from 'react';
import { Slide } from 'react-slideshow-image';
import SliderCard from './SliderCard.component';
import { results } from '../../mocks/en-us/featured-banners.json';
import 'react-slideshow-image/dist/styles.css';
import './slider.style.css';

function Slider() {
  const furnitures = results.map((result) => {
    return {
      id: result.id,
      title: result.data.title,
      description: result.data.description[0].text,
      imageAlt: result.data.main_image.alt,
      imageHeight: result.data.main_image.dimensions.height,
      imageWidth: result.data.main_image.dimensions.width,
      imageUrl: result.data.main_image.url,
      href: result.href,
    };
  });

  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    indicators: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slide className="slider-container" {...properties}>
      {furnitures.map((furniture) => (
        <SliderCard key={1} itemFurniture={furniture} />
      ))}
    </Slide>
  );
}

export default Slider;
