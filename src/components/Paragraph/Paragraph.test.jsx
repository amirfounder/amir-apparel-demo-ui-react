import { screen, render, cleanup } from '@testing-library/react';
import React from 'react';
import { Paragraph } from '.';

afterEach(cleanup)

test('render', () => {
  render(<Paragraph>Test</Paragraph>)
  const paragraph = screen.getByTestId('paragraph');
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent('Test')
})

test('render with custom datatestid', () => {
  render(<Paragraph dataTestId='custom-data-test-id' >Test</Paragraph>)
  const paragraph = screen.getByTestId('custom-data-test-id');
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent('Test')
})