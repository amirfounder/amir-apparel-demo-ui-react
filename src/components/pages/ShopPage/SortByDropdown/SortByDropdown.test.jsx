import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { SortByDropdown } from './SortByDropdown'
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup)

test('render test', () => {
  const componentToRender = (
    <BrowserRouter>
      <SortByDropdown />
    </BrowserRouter>
  )
  render(componentToRender)
})