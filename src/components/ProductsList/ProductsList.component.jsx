import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product.component';
import {
  ProductsListContainer,
  ProductsContainer,
} from './themes/productslist.style';

function ProductsList() {
  const { results } = useSelector((state) => state.products);
  return (
    <ProductsListContainer>
      <ProductsContainer>
        {results.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductsContainer>
    </ProductsListContainer>
  );
}

export default ProductsList;
