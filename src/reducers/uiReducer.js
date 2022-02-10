import { types } from '../types/types';

export const uiReducer = (state, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };

    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };

    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };

    case types.uiFinishLoading:
      console.log(state);
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
