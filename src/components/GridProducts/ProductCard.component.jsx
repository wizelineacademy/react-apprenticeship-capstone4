import React from 'react';
import { filterByCategory } from '../../utils/selectors/filterBycategory';
import {
  CardContainer,
  CardImage,
  CardInfo,
  CardPrice,
  CardTitle,
} from './themes/productcard.style.js';
function ProductCard({ product }) {
  const category = filterByCategory(product.idCategory);
  return (
    <CardContainer>
      <CardImage
        className="productcard-image"
        src={product.image}
        alt={product.alt}
      />
      <CardInfo>
        <CardTitle>{product.name}</CardTitle>
        <label>{category}</label>
        <CardPrice>${product.price}</CardPrice>
      </CardInfo>
    </CardContainer>
  );
}

export default ProductCard;
