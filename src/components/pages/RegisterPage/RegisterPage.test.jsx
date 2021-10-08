import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { RegisterPage } from '.';

afterEach(cleanup)

test('render', () => {
  render(<RegisterPage/>)
  const registerPage = screen.getByTestId('register-page')
  expect(registerPage).toBeInTheDocument();
  expect(registerPage).toHaveTextContent('Register page');
})