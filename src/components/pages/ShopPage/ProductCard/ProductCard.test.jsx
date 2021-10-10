import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';
import { ProductCard } from '.';
import { scrollToTop } from '../../../../utils/utils';

const mockHistoryPush = jest.fn()

jest.mock('../../../../utils/utils', () => ({
  ...jest.requireActual('../../../../utils/utils'),
  scrollToTop: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}))

const mockProduct = {
  id: 1,
  name: 'name',
  price: 9.88
}

test('render', () => {
  render(<ProductCard product={mockProduct} />);
  const productCard = screen.getByTestId('product-card');
  expect(productCard).toBeInTheDocument();
})

test('click test', () => {
  render(<ProductCard product={mockProduct} />);
  const productCard = screen.getByTestId('product-card');
  fireEvent.click(productCard);
  expect(mockHistoryPush).toHaveBeenCalled();
  expect(scrollToTop).toHaveBeenCalled()
})