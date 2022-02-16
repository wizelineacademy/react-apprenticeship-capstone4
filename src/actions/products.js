import { types } from '../types/types';

export const addCategory = (id, category) => ({
  type: types.addCategory,
  payload: { id, category },
});

export const removeProductsByCategory = (category) => ({
  type: types.removeProducts,
  payload: category,
});

export const loadProducts = (products) => ({
  type: types.loadProducts,
  payload: products,
});

export const resultsProducts = (products) => ({
  type: types.resultsProducts,
  payload: products,
});
