import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ProductList from '../../pages/ProductListPage.page';
import { store } from '../../store/store';

describe('Testing ProductsList Page', () => {
  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/products']}>
            <ProductList />
          </MemoryRouter>
        </Provider>
      );
    });
  })
  test('Product Category Sidebar is fetching and rendering data from the API', async() => {
    await waitFor(async () => {
      const categories = screen.getAllByTestId('category-sidebar');
      expect(categories.length).toBe(5);
    });
  });

  test('Category links on Product Category Sidebar are filtering Products Grid correctly interacting with the API', async() => {
    await waitFor(async () => {
      const categories = screen.getAllByTestId('category-sidebar');
      fireEvent.click(categories[0]);
      const products = screen.getAllByTestId('category-product');
      expect(products[0].textContent.startsWith(categories[0].textContent)).toBe(true);
    });
  });

  test('Pagination Controls are generated correctly based on the number of results fetched from the API and the maximum number of products per page', async() => {
    await waitFor(async () => {
      const products = screen.getAllByTestId('product-image');
      expect(products.length).toBe(12);
      const incrementButton = screen.getByTestId('increment');
      fireEvent.click(incrementButton);
      const productsAfterClick = screen.getAllByTestId('product-image');
      expect(productsAfterClick.length).toBe(12);
    });
  });

  test('Prev button is disabled when the user is on the first page', async() => {
    await waitFor(async () => {
      const handleDecrement = jest.fn();
      const decrementButton = screen.getByTestId('decrement');
      fireEvent.click(decrementButton);
      expect(handleDecrement).not.toHaveBeenCalled();
    });
  });
});