import { render, screen } from '@testing-library/react';
import React from 'react';
import { Heading } from '.';

test('render heading no level defined', () => {
  render(<Heading level={2}>Test</Heading>)
  const heading = screen.getByTestId('heading-2');
  expect(heading).toBeInTheDocument();
})

test('render with level={1}', () => {
  render(<Heading level={1}>Test</Heading>)
  const heading = screen.getByTestId('heading-1');
  expect(heading).toBeInTheDocument();
})

test('render with level={2}', () => {
  render(<Heading level={2}>Test</Heading>)
  const heading = screen.getByTestId('heading-2');
  expect(heading).toBeInTheDocument();
})

test('render with level={3}', () => {
  render(<Heading level={3}>Test</Heading>)
  const heading = screen.getByTestId('heading-3');
  expect(heading).toBeInTheDocument();
})

test('render with level={4}', () => {
  render(<Heading level={4}>Test</Heading>)
  const heading = screen.getByTestId('heading-4');
  expect(heading).toBeInTheDocument();
})

test('render with level={5}', () => {
  render(<Heading level={5}>Test</Heading>)
  const heading = screen.getByTestId('heading-5');
  expect(heading).toBeInTheDocument();
})

test('render with level={6}', () => {
  render(<Heading level={6}>Test</Heading>)
  const heading = screen.getByTestId('heading-6');
  expect(heading).toBeInTheDocument();
})