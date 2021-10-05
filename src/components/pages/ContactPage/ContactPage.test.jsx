import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { ContactPage } from '.';

afterEach(cleanup)

test('render', () => {
  render(<ContactPage/>)
  const contactPage = screen.getByTestId('contact-page')
  expect(contactPage).toBeInTheDocument();
  expect(contactPage).toHaveTextContent('Contact page');
})