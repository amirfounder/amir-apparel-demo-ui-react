import { cleanup, fireEvent, render, screen, shallow } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProductPage } from '.';
import { CartProvider } from '../../../context/CartContext';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: () => ({
    pathname: '/p/product-1'
  })
}))

afterEach(cleanup)

const componentToRender = (
  <BrowserRouter>
    <CartProvider>
      <ProductPage />
    </CartProvider>
  </BrowserRouter>
)

test('render', () => {
  render(componentToRender)
  const productPage = screen.getByTestId('product-page');
  expect(productPage).toBeInTheDocument();
})

test('call set shipping show', () => {
  render(componentToRender);
  const shippingToggleHeader = screen.getByTestId('shipping-toggle-header');
  const shippingToggleContent = screen.getByTestId('shipping-toggle-content');
  expect(shippingToggleContent).not.toHaveClass('show')
  fireEvent.click(shippingToggleHeader);
  expect(shippingToggleContent).toHaveClass('show')
})