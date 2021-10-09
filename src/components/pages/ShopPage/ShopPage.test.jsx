import { screen, render, cleanup } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider, useShopContext } from '../../../context/ShopContext';
import { ShopPage } from './ShopPage';
import { getProducts } from './ShopPageService'

afterEach(cleanup);

const mockUseShopContextImpl = () => ({
  products: [],
  setProducts: jest.fn(),
  showSidebar: true
})

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => jest.fn()
}))

jest.mock('./ShopPageService', () => ({
  ...jest.requireActual('./ShopPageService'),
  getProducts: jest.fn()
}));

jest.mock('../../../context/ShopContext', () => ({
  ...jest.requireActual('../../../context/ShopContext'),
  useShopContext: jest.fn()
}))

const componentToRender = (
  <BrowserRouter>
    <ShopProvider>
      <ShopPage />
    </ShopProvider>
  </BrowserRouter>
)

test('render', () => {
  useShopContext.mockImplementation(mockUseShopContextImpl);

  render(componentToRender);
  const shopPage = screen.getByTestId('shop-page')
  expect(shopPage).toBeInTheDocument();
})

test('api error shows', () => {
  getProducts.mockImplementation((_, __, ___, ____, setApiError) => { setApiError(true) })
  useShopContext.mockImplementation(mockUseShopContextImpl)

  render(componentToRender);
  const apiErrorMessage = screen.getByTestId('api-error-message')
  expect(apiErrorMessage).toBeInTheDocument();
})

test('show sidebar = true', () => {
  useShopContext.mockImplementation(mockUseShopContextImpl)
  render(componentToRender);
  const mainContainer = screen.getByTestId('main-container');
  expect(mainContainer).toBeInTheDocument();
  expect(mainContainer).toHaveStyle('grid-template-columns: 2fr 7fr')
})

test('show sidebar = false', () => {
  useShopContext.mockImplementation(() => ({ products: [], showSidebar: false }))
  render(componentToRender);
  const mainContainer = screen.getByTestId('main-container');
  expect(mainContainer).toBeInTheDocument();
  expect(mainContainer).toHaveStyle('grid-template-columns: 1fr')
})
