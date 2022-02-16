import React from 'react';
import { useDispatch } from 'react-redux';
import { activeCategory } from '../../actions/categories.js';
import { addCategory } from '../../actions/products.js';
import './themes/categorycard.style.js';
import { CCContainer, CCImage, CCTitle } from './themes/categorycard.style.js';
function GridCard({ id, category, image, alt }) {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(addCategory(id, category));
    dispatch(activeCategory(category));
  };
  return (
    <CCContainer>
      <CCImage data-testid="CCImage" src={image} alt={alt} />
      <CCTitle to={`/products/${category}`} onClick={handleButton}>
        {category}
      </CCTitle>
    </CCContainer>
  );
}

export default GridCard;
