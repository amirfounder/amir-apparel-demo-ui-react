import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = (props) => {
  const {
    children
  } = props;

  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider
      value={{
        cart, setCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Could not access cart context.")
  return context;
}