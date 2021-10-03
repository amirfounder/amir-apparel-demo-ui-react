import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { CartProvider, useCartContext } from './CartContext';

afterEach(cleanup);

const ChildComponentCallingCartContext = () => {
  useCartContext();
  return (
    <div data-testid="cart-context-child-for-testing" />
  )
}

test('failed call', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  expect(() => render(<ChildComponentCallingCartContext />)).toThrowError()
})

test('successful call', () => {
  expect(() => render(<CartProvider><ChildComponentCallingCartContext /></CartProvider>)).not.toThrowError();
  expect(screen.getByTestId("cart-context-child-for-testing")).toBeInTheDocument();
})