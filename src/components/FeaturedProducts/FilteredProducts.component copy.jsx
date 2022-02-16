import React from 'react';
import Product from './ProductCard.component';
import {
  FeaturedProductsContainer,
  Loading,
  ProductsContainer,
} from './themes/featuredproducts.style';
import { useSelector } from 'react-redux';
import NoProducts from '../Alerts/NoProducts.component';

function FilteredProducts() {
  const { filtered } = useSelector((state) => state.products);
  const products = Object.values(filtered).flat();
  const loading = false;
  return (
    <>
      <FeaturedProductsContainer>
        {loading && <Loading>Loading</Loading>}
        {products.length === 0 ? (
          <NoProducts />
        ) : (
          <ProductsContainer>
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </ProductsContainer>
        )}
      </FeaturedProductsContainer>
    </>
  );
}

export default FilteredProducts;
