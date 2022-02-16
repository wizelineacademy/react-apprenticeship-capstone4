import React from 'react';
import picture from '../../assets/central.jpeg';
import {
  ProductsButton,
  ProductsContainer,
  ProductsImage,
} from './themes/products.style';
function Products() {
  return (
    <ProductsContainer className="products-container">
      <ProductsImage className="products-image" src={picture} />
      <ProductsButton className="products-button">Discover</ProductsButton>
    </ProductsContainer>
  );
}

export default Products;
