import React from 'react';
import { results } from '../../mocks/en-us/featured-products.json';
import Product from './ProductCard.component';
import { ProductsContainer } from './themes/gridproducts.style';

function GridProducts() {
  const products = results.map((result) => {
    return {
      id: result.id,
      type: result.type,
      name: result.data.name,
      idCategory: result.data.category.id,
      image: result.data.mainimage.url,
      height: result.data.mainimage.dimensions.height,
      width: result.data.mainimage.dimensions.width,
      alt: result.data.alt,
      description: result.data.short_description,
      stock: result.data.stock,
      price: result.data.price,
      href: result.href,
    };
  });
  return (
    <ProductsContainer>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
}

export default GridProducts;
