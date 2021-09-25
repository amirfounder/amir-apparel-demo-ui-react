import React, { useEffect, useState } from 'react';
import { ProductGrid } from '../../ProductGrid';
import { buildShopPageSearchQuery, getProducts } from './ShopPageService';
import { Page } from '../../Page';
import { Pagination } from './Pagination';
import { useLocation } from 'react-router';
import { parseSearchQuery } from '../../../utils/utils';
import { useShopContext } from '../../../context/ShopContext';

export const ShopPage = () => {
  const location = useLocation();
  const {
    products, setProducts
  } = useShopContext();

  const [apiError, setApiError] = useState("");
  const [currentPage, setCurrentPage] = useState(null)
  const [totalPages, setTotalPages] = useState(null)

  useEffect(() => {
    const searchQueryObj = parseSearchQuery(location.search)
    const shopPageQueries = buildShopPageSearchQuery(searchQueryObj)
    getProducts(shopPageQueries, setProducts, setCurrentPage, setTotalPages, setApiError);
  }, [location.search, setCurrentPage, setTotalPages, setProducts, setApiError])

  return (
    <Page>
      {apiError && <div>{apiError}</div>} 
      <ProductGrid
        products={products}
      />
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </Page>
  )
}