import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { AboutPage } from '.';

afterEach(cleanup)

test('render', () => {
  render(<AboutPage/>)
  const aboutPage = screen.getByTestId('about-page')
  expect(aboutPage).toBeInTheDocument();
  expect(aboutPage).toHaveTextContent('About page');
})