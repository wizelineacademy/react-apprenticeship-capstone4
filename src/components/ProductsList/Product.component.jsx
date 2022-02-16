import React from 'react';
import {
  CartButton,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductTitle,
} from './themes/product.style.js';
function Product({ id, name, image, description, price }) {
  return (
    <ProductContainer to={`/product/${id}`}>
      <ProductImage
        className="productProduct-image"
        src={image}
        alt="anything"
      />
      <ProductInfo>
        <ProductTitle>{name}</ProductTitle>
        <label>{description}</label>
        <label>Category</label>
        <ProductPrice>${price}</ProductPrice>
        <CartButton>Add to cart</CartButton>
      </ProductInfo>
    </ProductContainer>
  );
}

export default Product;
