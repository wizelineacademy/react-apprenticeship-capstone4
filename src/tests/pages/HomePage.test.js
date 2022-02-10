import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { useState } from 'react';
import RouterContext from '../../context/RouterContext';
import HomePage from '../../pages/HomePage.page';
import ProductList from '../../pages/ProductListPage.page';
import { Route } from '../../providers/Router.provider';

describe('Testing HomePage', () => {

  const navigate = jest.fn();
  const context = {
    router: {
      pathname: '/home',
      navigate,
  }};

  beforeEach(() => {
    render(
      <RouterContext.Provider value={ context }>
        <Route href="/home">
          <HomePage />
        </Route>
      </RouterContext.Provider>
    );
  });
  test('should route to ProductListPage ', () => {
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledTimes(1);
  });

  test('should route to HomePage ', () => {
    const button = screen.getByTestId('logo');
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledTimes(1);
  });
});
