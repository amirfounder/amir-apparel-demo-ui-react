import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from '.'


test('render test', () => {
  render(<Pagination />)
  const pagination = screen.getByTestId('pagination');
  expect(pagination).toBeInTheDocument();
})
