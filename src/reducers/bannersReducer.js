import { types } from '../types/types';
const initialState = {
  isLoading: false,
  banners: [],
};
export const bannersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.bannerSet:
      return {
        ...state,
        banners: action.payload,
      };
    default:
      return state;
  }
};
