import { types } from '../types/types';

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});

export const removeError = () => ({
  type: types.uiRemoveError,
});

export const startProductsLoading = () => ({
  type: types.uiStartProductsLoading,
});

export const finishProductsLoading = () => ({
  type: types.uiFinishProductsLoading,
});

export const startSearchAlert = (msg = 'Try searching with another word') => ({
  type: types.uiSetSearchAlert,
  payload: msg,
});

export const finishSearchAlert = () => ({
  type: types.uiRemoveSearchAlert,
});
