import React, { useEffect, useState } from 'react';
import { ProductGrid } from '../../ProductGrid';
import { getProducts } from './ShopPageService';
import { Page } from '../../Page';

export const ShopPage = () => {

  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState("")

  useEffect(() => {
    getProducts(setProducts, setApiError);
  }, [setProducts, setApiError])

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Page>
      {apiError && <div>{apiError}</div>} 
      <ProductGrid
        products={products}
      />
    </Page>
  )
}