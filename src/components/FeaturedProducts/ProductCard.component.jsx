import React from 'react';
import { filterByCategory } from '../../utils/selectors/filterBycategory';
import {
  CardContainer,
  CardImage,
  CardInfo,
  CardPrice,
  CardTitle,
} from './themes/productcard.style.js';
function ProductCard({ id, name, idCategory, alt, image, price }) {
  const category = filterByCategory(idCategory);
  return (
    <CardContainer data-testid="product" to={`/product/${id}`}>
      <CardImage src={image} alt={alt} />
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <label data-testid="category-product">{category}</label>
        <CardPrice>${price}</CardPrice>
      </CardInfo>
    </CardContainer>
  );
}

export default ProductCard;
