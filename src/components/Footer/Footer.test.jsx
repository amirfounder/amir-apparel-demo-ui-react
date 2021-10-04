import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '.';

afterEach(cleanup);

test('Footer renders', () => {
  const componentToRender = (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
  render(componentToRender)
  const footer = screen.getByTestId('footer');
  expect(footer).toBeInTheDocument()
})