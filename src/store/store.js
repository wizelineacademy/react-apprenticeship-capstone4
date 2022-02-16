import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { bannersReducer } from '../reducers/bannersReducer';
import { cartReducer } from '../reducers/cartReducer';
import { categoriesReducer } from '../reducers/categoriesReducer';
import { pagesReducer } from '../reducers/pagesReducer';
import { productReducer } from '../reducers/productsReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  categories: categoriesReducer,
  banners: bannersReducer,
  products: productReducer,
  ui: uiReducer,
  cart: cartReducer,
  page: pagesReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
