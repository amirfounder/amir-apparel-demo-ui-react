import { cleanup, fireEvent, render, screen, act } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProductPage } from '.';
import { CartProvider } from '../../../context/CartContext';
import { buildCartProductDTO } from '../../../utils/utils';
import { getProductById } from './ProductPageService';

const mockCartDispatcher = jest.fn()

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: () => ({
    pathname: '/p/product-1'
  })
}))

jest.mock('./ProductPageService')
jest.mock('../../../utils/utils')
jest.mock('../../../context/CartContext', () => ({
  ...jest.requireActual('../../../context/CartContext'),
  useCartContext: () => ({
    cartDispatcher: mockCartDispatcher
  })
}))

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
})

const componentToRender = (
  <BrowserRouter>
    <CartProvider>
      <ProductPage />
    </CartProvider>
  </BrowserRouter>
)

test('render', () => {
  render(componentToRender)
  const productPage = screen.getByTestId('product-page');
  expect(productPage).toBeInTheDocument();
})

test('call set shipping show', () => {
  render(componentToRender);
  const shippingToggleHeader = screen.getByTestId('shipping-toggle-header');
  const shippingToggleContent = screen.getByTestId('shipping-toggle-content');
  expect(shippingToggleContent).not.toHaveClass('show')
  fireEvent.click(shippingToggleHeader);
  expect(shippingToggleContent).toHaveClass('show')
})

test('call add item to cart function', () => {
  getProductById.mockImplementation((productId, setProduct, setApiError) => {
    setProduct({id: 1, quantity: 10})
  })

  act(() => {
    render(componentToRender);
  })

  const quantityPickerInput = screen.getByTestId('quantity-picker-input')
  const addToCartButton = screen.getByTestId('add-to-cart-button')

  act(() => {
    fireEvent.click(addToCartButton);
    fireEvent.input(quantityPickerInput, {target: {value: '10'}});
  })

  expect(buildCartProductDTO).toHaveBeenCalled()
  expect(mockCartDispatcher).toHaveBeenCalled()
})

test('api error message shows', () => {
  getProductById.mockImplementation((productId, setProduct, setApiError) => {
    setApiError(true);
  })
  
  render(componentToRender);
  const apiErrorMessage = screen.getByTestId('api-error-message')
  expect(apiErrorMessage).toBeInTheDocument();

})