import React from 'react';
import './themes/slidercard.style.js';
function SliderCard({ banner }) {
  return (
    <div
      data-testid="slider-card"
      className="slidercard-container"
      style={{ width: `${banner.width / 2}` }}
    >
      <img
        className="slidercard-image"
        data-testid="slider-image"
        src={banner.imageUrl}
        alt=""
        width={banner.width / 2}
        height={banner.height / 2}
      />
      <div>
        <div className="slidercard-title">{banner.title}</div>
      </div>
    </div>
  );
}

export default SliderCard;
