import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './CartContextService';

const CartContext = createContext();

export const CartProvider = (props) => {
  const {
    children
  } = props;

  const cartInitialValue = []
  const [cart, cartDispatcher] = useReducer(cartReducer, cartInitialValue)

  return (
    <CartContext.Provider value={{cart, cartDispatcher}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Could not access cart context.")
  return context;
}