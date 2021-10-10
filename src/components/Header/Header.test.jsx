import { cleanup, screen, render, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '.';
import { CartProvider } from '../../context/CartContext';

afterEach(cleanup);

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}))

const componentToRender = (
  <BrowserRouter>
    <CartProvider>
      <Header />
    </CartProvider>
  </BrowserRouter>
)

test('Header renders', () => {
  render(componentToRender);
  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();
})

test('Cart pushes history', () => {
  render(componentToRender);
  const headerCartIcon = screen.getByTestId('header-cart-icon');
  fireEvent.click(headerCartIcon);
  expect(mockHistoryPush).toHaveBeenCalledWith('/cart');
})