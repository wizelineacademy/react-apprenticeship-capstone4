import { types } from '../types/types';

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case types.addCategory:
      console.log(action);
      return {
        ...state,
        [action.payload.category.category]: action.payload.products.filter(
          (product) => product.idCategory === action.payload.category.id
        ),
      };
    case types.removeCategory:
      delete state[action.payload];
      return { ...state };
    default:
      return state;
  }
};
/*
switch (action.type) {
  case types.archiveNote:
    return {
      ...state,
      [action.payload.id]: action.payload,
    };

  case types.unarchiveNote:
    delete state[action.payload];
    return { ...state };

  default:
    return state;
}
};
*/
