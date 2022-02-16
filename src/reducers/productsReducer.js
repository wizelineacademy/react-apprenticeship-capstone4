import { types } from '../types/types';

const initialState = {
  isLoading: false,
  filtered: {},
  productsGrid: [],
  results: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addCategory:
      return {
        ...state,
        filtered: {
          ...state.filtered,
          [action.payload.category]: state.productsGrid.filter(
            (product) => product.idCategory === action.payload.id
          ),
        },
      };

    case types.removeProducts:
      delete state.filtered[action.payload];
      return { ...state };

    case types.loadProducts:
      return {
        ...state,
        productsGrid: action.payload,
      };

    case types.resultsProducts:
      return {
        ...state,
        results: action.payload,
      };

    case types.clearFilterCategories:
      return {
        ...state,
        filtered: {},
      };

    default:
      return state;
  }
};
