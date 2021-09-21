import React, { useEffect, useState } from 'react';
import { ProductGrid } from '../../ProductGrid';
import { getProducts } from './ShopPageService';
import styles from './ShopPage.module.scss'

export const ShopPage = () => {

  const [products, setProducts] = useState([]);
  const [isApiError, setIsApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState("")

  useEffect(() => {
    getProducts(setProducts, setIsApiError, setApiErrorMessage);
  }, [setProducts, setIsApiError, setApiErrorMessage])
  return (
    <div className={styles.main}>
      {isApiError && <div>{apiErrorMessage}</div>}
      <ProductGrid
        products={products}
      />
    </div>
  )
}