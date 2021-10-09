import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from '.'
import { BrowserRouter } from 'react-router-dom';

test('render test', () => {
  render(<Pagination />)
  const pagination = screen.getByTestId('pagination');
  expect(pagination).toBeInTheDocument();
})


test('buttons are rendered', () => {
  render(
    <BrowserRouter>
      <Pagination totalPages={100} />
    </BrowserRouter>
  )
  const paginationButtons = screen.getAllByTestId('pagination-button');
  expect(paginationButtons).toHaveLength(5);
})

test('arrows are rendered', () => {
  render(
    <BrowserRouter>
      <Pagination currentPage={2} totalPages={100} />
    </BrowserRouter>
  )

  const leftPaginationArrow = screen.getByTestId('left-pagination-arrow')
  const rightPaginationArrow = screen.getByTestId('right-pagination-arrow')

  expect(leftPaginationArrow).toBeInTheDocument();
  expect(rightPaginationArrow).toBeInTheDocument();
})
