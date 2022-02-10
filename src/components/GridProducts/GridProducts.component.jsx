import React from 'react';
import { useProductsContext } from '../../providers/Products.provider';
import Product from './ProductCard.component';
import {
  GridProductsContainer,
  Loading,
  ProductsContainer,
} from './themes/gridproducts.style';

function GridProducts() {
  const {
    state,
    uiState: { loading },
  } = useProductsContext();
  const products = Object.values(state).flat();
  console.log(loading);
  return (
    <>
      <GridProductsContainer>
        {loading && <Loading>Loading</Loading>}
        <ProductsContainer>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </GridProductsContainer>
    </>
  );
}

export default GridProducts;
