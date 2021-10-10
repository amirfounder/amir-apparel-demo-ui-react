import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { Page } from '.';

afterEach(cleanup);

test('Page renders. No dataTestId specified', () => {
  render(<Page />)
  const page = screen.getByTestId('page');
  expect(page).toBeInTheDocument()
})

test('Page renders. dataTestId specified', () => {
  render(<Page dataTestId='custom-page-test' />)
  const page = screen.getByTestId('custom-page-test');
  expect(page).toBeInTheDocument()
})