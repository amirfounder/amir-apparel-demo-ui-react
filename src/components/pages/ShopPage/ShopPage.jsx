import React, { useEffect, useState } from 'react';
import { ProductGrid } from '../../ProductGrid';
import { getProducts } from './ShopPageService';
import { Page } from '../../Page';
import { Pagination } from './Pagination';
import { useLocation } from 'react-router';
import { getQueryParams } from '../../../utils/utils';
import { useShopContext } from '../../../context/ShopContext';

export const ShopPage = () => {
  const query = new URLSearchParams(useLocation().search)

  const {
    products, setProducts
  } = useShopContext();

  const [apiError, setApiError] = useState("");

  useEffect(() => {
    getProducts(query, setProducts, setApiError);
  }, [query, setProducts, setApiError])

  return (
    <Page>
      {apiError && <div>{apiError}</div>} 
      <ProductGrid
        products={products}
      />
      <div>
        <Pagination />
      </div>
    </Page>
  )
}