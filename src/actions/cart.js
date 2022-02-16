import { types } from '../types/types';

export const setProduct = (product) => ({
  type: types.setProduct,
  payload: product,
});

export const setImagesProduct = (images) => ({
  type: types.setImagesProduct,
  payload: images,
});
