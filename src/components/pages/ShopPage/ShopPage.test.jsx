import { screen, render, cleanup } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from '../../../context/ShopContext';
import { ShopPage } from './ShopPage';
import { getProducts } from './ShopPageService'

afterEach(() => {
  cleanup()
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => jest.fn()
}))

jest.mock('./ShopPageService', () => ({
  ...jest.requireActual('./ShopPageService'),
  getProducts: jest.fn()
}));

const componentToRender = (
  <BrowserRouter>
    <ShopProvider>
      <ShopPage />
    </ShopProvider>
  </BrowserRouter>
)

test('render', () => {
  render(componentToRender);
  const shopPage = screen.getByTestId('shop-page')
  expect(shopPage).toBeInTheDocument();
})

test('api error shows', () => {
  getProducts.mockImplementation((_, __, ___, ____, setApiError) => {
    setApiError(true)
  })

  render(componentToRender);
  const apiErrorMessage = screen.getByTestId('api-error-message')
  expect(apiErrorMessage).toBeInTheDocument();
})