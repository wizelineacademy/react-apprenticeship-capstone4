import React from 'react';
import './themes/slidercard.style.js';
function SliderCard({ banner }) {
  return (
    <div
      className="slidercard-container"
      style={{ width: `${banner.width / 2}` }}
    >
      <img
        className="slidercard-image"
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
