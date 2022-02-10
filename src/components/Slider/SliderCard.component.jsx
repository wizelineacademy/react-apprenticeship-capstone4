import React from 'react';
import './themes/slidercard.style.js';
function SliderCard({ itemFurniture }) {
  return (
    <div
      className="slidercard-container"
      style={{ width: `${itemFurniture.imageWidth / 2}` }}
    >
      <img
        className="slidercard-image"
        src={itemFurniture.imageUrl}
        alt=""
        width={itemFurniture.imageWidth / 2}
        height={itemFurniture.imageHeight / 2}
      />
      <div>
        <div className="slidercard-title">{itemFurniture.title}</div>
      </div>
    </div>
  );
}

export default SliderCard;
