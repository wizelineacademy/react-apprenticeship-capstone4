import { types } from '../types/types';
const initialState = {
  isLoading: false,
  categories: [],
};
export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.categoriesSet:
      return {
        ...state,
        categories: action.payload,
      };

    case types.activeCategory:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.category === action.payload) {
            return {
              ...category,
              isActive: true,
            };
          }
          return category;
        }),
      };

    case types.deactiveCategory:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.category === action.payload) {
            return {
              ...category,
              isActive: false,
            };
          }
          return category;
        }),
      };

    case types.clearFilterCategories:
      return {
        ...state,
        categories: state.categories.map((category) => {
          return {
            ...category,
            isActive: false,
          };
        }),
      };
    default:
      return state;
  }
};
