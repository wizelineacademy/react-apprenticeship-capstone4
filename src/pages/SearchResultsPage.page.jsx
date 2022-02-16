import React from 'react';
import Pagination from '../components/Pagination/Pagination.component';
import ProductsList from '../components/ProductsList/ProductsList.component';
//import ProductList from './ProductListPage.page';
import { SearchContainer } from './themes/searchResults.style.js';

function SearchResults() {
  return (
    <SearchContainer>
      <ProductsList />
      <Pagination />
    </SearchContainer>
  );
}

export default SearchResults;
