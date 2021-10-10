import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import { ShopProvider } from '../../context/ShopContext';
import App from './App';


const componentToRender = (
  <BrowserRouter>
    <ShopProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ShopProvider>
  </BrowserRouter>
)

test('renders learn react link', () => {
  render(componentToRender);
  expect(screen.getByTestId('app')).toBeInTheDocument()
});
