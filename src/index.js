import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle.style';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRouter from './router/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
