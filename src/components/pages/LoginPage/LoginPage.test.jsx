import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { LoginPage } from '.';

afterEach(cleanup)

test('render', () => {
  render(<LoginPage/>)
  const loginPage = screen.getByTestId('login-page')
  expect(loginPage).toBeInTheDocument();
  expect(loginPage).toHaveTextContent('Login page');
})