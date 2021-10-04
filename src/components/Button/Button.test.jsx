import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '.';


afterEach(cleanup)

test('render test', () => {
  render(<Button>Test</Button>)
  const button = screen.getByTestId('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Test');
})

describe('props', () => {
  
  test('dataTestId prop', () => {
    render(<Button dataTestId='custom-test-id'>Test</Button>);
    const button = screen.getByTestId('custom-test-id')
    expect(button).toBeInTheDocument();
  })
  
  describe('size prop', () => {

    test('small', () => {
      render(<Button size='small'>Test</Button>)
      const button = screen.getByTestId('button')
      expect(button).toHaveAttribute('class', expect.stringContaining('small'))
    })

    test('medium', () => {
      render(<Button size='medium'></Button>)
      const button = screen.getByTestId('button')
      expect(button).toHaveAttribute('class', expect.stringContaining('medium'))
    })

    test('large', () => {
      render(<Button size='large'></Button>)
      const button = screen.getByTestId('button')
      expect(button).toHaveAttribute('class', expect.stringContaining('large'))
    })

    test('blue', () => {
      render(<Button size='blue'></Button>)
      const button = screen.getByTestId('button')
      expect(button).toHaveAttribute('class', expect.stringContaining('small'))
    })
  })

  describe('type prop', () => {

    test('primary', () => {
      render(<Button type='primary'></Button>)
      const button = screen.getByTestId('button')
      expect(button).toHaveAttribute('class', expect.stringContaining('primary'))
    })

    test('secondary', () => {
      render(<Button type='secondary'></Button>)
      const button = screen.getByTestId('button')
      expect(button).toHaveAttribute('class', expect.stringContaining('secondary'))
    })

    test('invalid', () => {
      render(<Button type='invalid'></Button>)
      const button = screen.getByTestId('button')
      expect(button).toHaveAttribute('class', expect.stringContaining('primary'))
    })
  })
})