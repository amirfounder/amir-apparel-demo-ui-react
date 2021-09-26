import React, { createContext, useContext, useReducer, useState } from 'react';

const ShopContext = createContext();

export const ShopProvider = (props) => {
  const {
    children
  } = props;

  const filterOptionsReducer = (state, action) => {
    if (action.attribute) {
      return null;
    }
  }

  const [initialFilterOptions, setInitialFilterOptions] = useState({})

  const [filterOptions, dispatchFilterOptions] = useReducer(filterOptionsReducer, initialFilterOptions)
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <ShopContext.Provider
      value={{
        products, setProducts,
        totalPages, setTotalPages,
        currentPage, setCurrentPage,
        showSidebar, setShowSidebar,
        filterOptions, dispatchFilterOptions,
        initialFilterOptions, setInitialFilterOptions
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