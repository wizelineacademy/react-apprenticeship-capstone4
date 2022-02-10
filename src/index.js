import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage.page';
import GlobalStyle from './GlobalStyle.style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);
