import { render, screen } from '@testing-library/react';
import React from 'react';
import { CheckboxInput } from './CheckboxInput';

test('render', () => {
  render(<CheckboxInput />);
  const checkboxInput = screen.getByTestId('checkbox-input');
  expect(checkboxInput).toBeInTheDocument();
})