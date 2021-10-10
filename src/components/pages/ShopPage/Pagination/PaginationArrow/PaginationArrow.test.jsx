import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PaginationArrow } from './PaginationArrow';
import { buildPaginationArrowTargetSearchQuery } from './PaginationArrowService';

afterEach(cleanup);

jest.mock('./PaginationArrowService', () => ({
  buildPaginationArrowTargetSearchQuery: jest.fn()
}))

test('render left arrow', () => {
  render(
    <BrowserRouter>
      <PaginationArrow direction='right' />
    </BrowserRouter>
  )
  const paginationArrow = screen.getByTestId('pagination-arrow')
  expect(paginationArrow).toBeInTheDocument();
})

test('render right arrow', () => {
  render(
    <BrowserRouter>
      <PaginationArrow direction='right' />
    </BrowserRouter>
  )
  const paginationArrow = screen.getByTestId('pagination-arrow')
  expect(paginationArrow).toBeInTheDocument();
})

test('render invalid', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  expect(() => {
    render(<BrowserRouter><PaginationArrow /></BrowserRouter>)
  }).toThrowError();
})

test('right arrow click', () => {
  render(
    <BrowserRouter>
      <PaginationArrow direction='right' />
    </BrowserRouter>
  );
  const paginationArrow = screen.getByTestId('pagination-arrow');
  fireEvent.click(paginationArrow);
  expect(buildPaginationArrowTargetSearchQuery)
    .toHaveBeenCalledWith(expect.any(String), undefined, 'right');
})

test('left arrow click', () => {
  render(
    <BrowserRouter>
      <PaginationArrow direction='left' />
    </BrowserRouter>
  );
  const paginationArrow = screen.getByTestId('pagination-arrow');
  fireEvent.click(paginationArrow);
  expect(buildPaginationArrowTargetSearchQuery)
    .toHaveBeenCalledWith(expect.any(String), undefined, 'left');
})