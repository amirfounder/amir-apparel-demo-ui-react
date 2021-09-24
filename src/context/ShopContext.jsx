import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const ShopProvider = (props) => {
  const {
    children
  } = props;

  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <ShopContext.Provider
      value={{
        products, setProducts,
        totalPages, setTotalPages,
        currentPage, setCurrentPage
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error("Could not access shop context.")
  return context;
}