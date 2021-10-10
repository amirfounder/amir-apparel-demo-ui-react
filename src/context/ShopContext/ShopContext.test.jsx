import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { ShopProvider, useShopContext } from './ShopContext';

afterEach(cleanup);

const ChildComponentCallingShopContext = () => {
  useShopContext();
  return (
    <div data-testid="shop-context-child-for-testing" />
  )
}

test('failed call', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  expect(() => render(<ChildComponentCallingShopContext />)).toThrowError()
})

test('successful call', () => {
  expect(() => render(<ShopProvider><ChildComponentCallingShopContext /></ShopProvider>)).not.toThrowError();
  expect(screen.getByTestId("shop-context-child-for-testing")).toBeInTheDocument();
})