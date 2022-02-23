import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from '../../pages/ProductDetailPage.page';
import { store } from '../../store/store';

describe('Testing Product Detail Page', () => {
  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/product/YZZ6OhIAACgAvlE1`]}>
            <ProductDetail />
          </MemoryRouter>
        </Provider>
      );
    });
  });
});
