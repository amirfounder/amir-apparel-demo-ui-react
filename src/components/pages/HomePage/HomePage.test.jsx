import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { HomePage } from '.';

afterEach(cleanup)

test('render', () => {
  render(<HomePage/>)
  const homePage = screen.getByTestId('home-page')
  expect(homePage).toBeInTheDocument();
  expect(homePage).toHaveTextContent('Home page');
})