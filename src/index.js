import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage.page';
import GlobalStyle from './GlobalStyle.style';
import { Route, RouterProvider } from './providers/Router.provider';
import ProductList from './pages/ProductListPage.page';
import { ProductsProvider } from './providers/Products.provider';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider>
      <ProductsProvider>
        <GlobalStyle />
        <Route href="/home">
          <HomePage />
        </Route>
        <Route href="/productlist">
          <ProductList />
        </Route>
      </ProductsProvider>
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
