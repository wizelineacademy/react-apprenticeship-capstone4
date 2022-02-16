import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts.component';
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories';
import './themes/productList.style.js';
import { ProductListContainer } from './themes/productList.style.js';
import { useSelector } from 'react-redux';
import FilteredProducts from '../components/FeaturedProducts/FilteredProducts.component copy';
import Sidebar from '../components/sidebar/Sidebar.component';
import { useProducts } from '../utils/hooks/useProducts';
import Pagination from '../components/Pagination/Pagination.component';

function ProductList() {
  useFeaturedCategories();
  const { page } = useSelector((state) => state.page);
  useProducts(page);
  const { filtered } = useSelector((state) => state.products);
  const isEmpty =
    Object.keys(filtered).length === 0 && filtered.constructor === Object;

  return (
    <>
      <ProductListContainer>
        <Sidebar />
        {isEmpty ? <FeaturedProducts /> : <FilteredProducts />}
      </ProductListContainer>
      <Pagination />
    </>
  );
}

export default ProductList;
