import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { QuantityPicker } from '.';
import { setQuantityService } from './QuantityPickerService'

jest.mock('./QuantityPickerService');


test('render', () => {
  render(<QuantityPicker />);
  const quantityPickerLabel = screen.getByTestId('quantity-picker-label');
  const quantityPickerInput = screen.getByTestId('quantity-picker-input');
  expect(quantityPickerInput).toBeInTheDocument();
  expect(quantityPickerLabel).toBeInTheDocument();
})

test('input stuff', () => {

  render(<QuantityPicker />);
  const quantityPickerInput = screen.getByTestId('quantity-picker-input');
  fireEvent.input(quantityPickerInput, {target: {value: '99'}})
  expect(setQuantityService).toHaveBeenCalled()
  
})