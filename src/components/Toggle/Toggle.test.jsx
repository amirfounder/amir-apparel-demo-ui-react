import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Toggle } from '.';

afterEach(cleanup)

describe('toggle', () => {
  test('render', () => {
    render(<Toggle>Test</Toggle>);
    const toggle = screen.getByTestId('toggle');
    expect(toggle).toBeInTheDocument();
  })
})
describe('toggle header', () => {
  test('render', () => {
    render(<Toggle.Header>Test</Toggle.Header>);
    const toggleHeader = screen.getByTestId('toggle-header');
    expect(toggleHeader).toBeInTheDocument();
  })
  test('click toggles show', () => {
    const mockToggleShow = jest.fn();
    render(<Toggle.Header toggleShow={mockToggleShow}>Test</Toggle.Header>);
    const toggleHeader = screen.getByTestId('toggle-header');
    fireEvent.click(toggleHeader);
    expect(mockToggleShow).toHaveBeenCalledTimes(1);
  })

  test('show is true adds show class', () => {
    const mockShow = true;
    render(<Toggle.Header show={mockShow}>Test</Toggle.Header>)
    const toggleHeaderIcon = screen.getByTestId('toggle-header-icon')
    expect(toggleHeaderIcon).toHaveClass('show')
  })
})
describe('toggle content', () => {
  test('render', () => {
    render(<Toggle.Content>Test</Toggle.Content>)
    const toggleContent = screen.getByTestId('toggle-content');
    expect(toggleContent).toBeInTheDocument();
  })
  test('show is true adds show class', () => {
    const mockShow = true;
    render(<Toggle.Content show={mockShow}>Test</Toggle.Content>)
    const toggleContent = screen.getByTestId('toggle-content')
    expect(toggleContent).toHaveClass('show')
  })
  test('show is false removes show class', () => {
    const mockShow = false;
    render(<Toggle.Content show={mockShow}>Test</Toggle.Content>)
    const toggleContent = screen.getByTestId('toggle-content')
    expect(toggleContent).not.toHaveClass('show')
  })
})