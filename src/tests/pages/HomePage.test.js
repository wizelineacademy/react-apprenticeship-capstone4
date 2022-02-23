import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage.page';
import { store } from '../../store/store';

describe('Testing Home Page', () => {
  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/home']}>
            <HomePage />
          </MemoryRouter>
        </Provider>
      );
    });
  })
  test('Featured Banners Slider is fetching and rendering data from the API', async() => {
    await waitFor(async () => {
      const image = screen.getAllByTestId('slider-image');
      const img = image[0].src;
      expect(img.startsWith('https://images.prismic.io/wizeline')).toBe(true);
    });
  });

  test('Featured Banners Slider is fetching and rendering data from the API', async() => {
    await waitFor(async () => {
      const categories = screen.getAllByTestId('CCImage');
      expect(categories.length).toBe(5);
    });
  });

  test('Featured Products Grid is fetching and rendering data from the API', async() => {
    await waitFor(async () => {
      const products = screen.getAllByTestId('product-image');
      expect(products.length).toBe(16);
    });
  });
  

});
