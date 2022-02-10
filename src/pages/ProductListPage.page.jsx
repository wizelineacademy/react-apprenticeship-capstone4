import React from 'react';
import GridProducts from '../components/GridProducts/GridProducts.component';
import Pagination from '../components/Pagination/Pagination.component';
import Sidebar from '../components/sidebar/Sidebar.component';
import './themes/productList.style.js';
import { ProductListContainer } from './themes/productList.style.js';

function ProductList() {
  return (
    <>
      <ProductListContainer>
        <Sidebar />
        <GridProducts />
      </ProductListContainer>
      <Pagination />
    </>
  );
}

export default ProductList;
