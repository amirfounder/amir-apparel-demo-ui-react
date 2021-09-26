import React, { useEffect, useState } from 'react';
import styles from './ShopPage.module.scss'
import { ProductGrid } from '../../ProductGrid';
import { buildSetOptionsUsingDispatch, buildShopPageSearchQuery, getFilterOptions, getProducts } from './ShopPageService';
import { Page } from '../../Page';
import { Pagination } from './Pagination';
import { useLocation } from 'react-router';
import { parseSearchQuery } from '../../../utils/utils';
import { useShopContext } from '../../../context/ShopContext';
import { ShopHeader } from './ShopHeader';
import { ProductFilterSidebar } from './ProductFilterSidebar/ProductFilterSidebar';

export const ShopPage = () => {
  const location = useLocation();
  const {
    products, setProducts,
    showSidebar,
    dispatchFilterOptions
  } = useShopContext();

  const buildSetOptions = buildSetOptionsUsingDispatch(dispatchFilterOptions)
  
  const [apiError, setApiError] = useState('');
  const [currentPage, setCurrentPage] = useState(null)
  const [totalPages, setTotalPages] = useState(null)

  useEffect(() => {
    const searchQueryObj = parseSearchQuery(location.search)
    const shopPageQueries = buildShopPageSearchQuery(searchQueryObj)
    getProducts(shopPageQueries, setProducts, setCurrentPage, setTotalPages, setApiError);
  }, [location.search, setCurrentPage, setTotalPages, setProducts, setApiError])

  useEffect(() => {
    getFilterOptions('material', buildSetOptions('material'), setApiError)
    getFilterOptions('type', buildSetOptions('type'), setApiError)
    getFilterOptions('color', buildSetOptions('color'), setApiError)
    getFilterOptions('demographic', buildSetOptions('demographic'), setApiError)
  }, [getFilterOptions, buildSetOptionsUsingDispatch, setApiError])

  return (
    <Page>
      <div className={styles.header}>
        <ShopHeader />
      </div>
      <div
        style={{gridTemplateColumns: showSidebar ? '1fr 4fr' : '1fr'}}
        className={styles.main}
      >
        <ProductFilterSidebar />
        <div>
          {apiError && <div>{apiError}</div>} 
          <ProductGrid products={products} />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </Page>
  )
}