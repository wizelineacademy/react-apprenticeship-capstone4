import { types } from '../types/types';

const initialState = {
  product: {},
  productImages: [],
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setProduct:
      return {
        ...state,
        product: action.payload,
      };

    case types.addProduct:
      return {
        ...state,
      };

    case types.setImagesProduct:
      return {
        ...state,
        productImages: action.payload,
      };

    default:
      return state;
  }
};
