import React from 'react';
import './themes/categorycard.style.js';
import { CCContainer, CCImage, CCTitle } from './themes/categorycard.style.js';
function GridCard({ category }) {
  return (
    <CCContainer>
      <CCImage data-testid="CCImage" src={category.image} alt={category.alt} />
      <CCTitle>{category.category}</CCTitle>
    </CCContainer>
  );
}

export default GridCard;
