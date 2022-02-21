import React from 'react';
import Product from './ProductCard.component';
import {
  FeaturedProductsContainer,
  Loading,
  ProductsContainer,
} from './themes/featuredproducts.style';
import { useSelector } from 'react-redux';

function FeaturedProducts() {
  const { productsGrid: products } = useSelector((state) => state.products);
  const loading = false;
  return (
    <FeaturedProductsContainer>
      {loading && <Loading>Loading</Loading>}
      <ProductsContainer>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductsContainer>
    </FeaturedProductsContainer>
  );
}

export default FeaturedProducts;
