import { types } from '../types/types';

const initialState = {
  products: {
    loading: false,
    msgError: null,
  },
  search: {
    loading: false,
    msgError: null,
  },
};
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetSearchAlert:
      return {
        ...state,
        search: {
          ...state.search,
          msgError: action.payload.msg,
        },
      };

    case types.uiRemoveSearchAlert:
      return {
        ...state,
        search: {
          ...state.search,
          msgError: null,
        },
      };

    case types.uiStartProductsLoading:
      return {
        ...state,
        products: {
          ...state.products,
          loading: true,
        },
      };

    case types.uiFinishProductsLoading:
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
        },
      };

    default:
      return state;
  }
};
