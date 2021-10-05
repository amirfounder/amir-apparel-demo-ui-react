import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { TextInput } from './TextInput';

test('render', () => {
  render(<TextInput />)
  const textInput = screen.getByTestId('text-input')
  const textLabel = screen.getByTestId('text-label')
  expect(textInput).toBeInTheDocument();
  expect(textLabel).toBeInTheDocument();
})

test('value prop', () => {
  const value = 'lol'
  render(<TextInput value={value} />)
  const textInput = screen.getByTestId('text-input')
  expect(textInput).toHaveValue(value);
})

test('onchange prop', () => {
  const mockOnChange = jest.fn();
  render(<TextInput onChange={mockOnChange} />)
  const textInput = screen.getByTestId('text-input');
  fireEvent.input(textInput, {target: {value: 'lol'}});
  expect(mockOnChange).toHaveBeenCalledTimes(1);
})