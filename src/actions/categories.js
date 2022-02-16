import { types } from '../types/types';

export const setCategories = (categories) => ({
  type: types.categoriesSet,
  payload: categories,
});

export const activeCategory = (category) => ({
  type: types.activeCategory,
  payload: category,
});

export const deactiveCategory = (category) => ({
  type: types.deactiveCategory,
  payload: category,
});

export const clearFilterCategories = () => ({
  type: types.clearFilterCategories,
});
