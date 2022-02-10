import { types } from '../types/types';

export const addCategory = (category, products) => ({
  type: types.addCategory,
  payload: { category, products },
});

export const removeCategory = (category) => ({
  type: types.removeCategory,
  payload: category,
});
