import React, { useEffect, useState } from 'react';
import styles from './ShopPage.module.scss'
import { ProductGrid } from '../../ProductGrid';
import {
  buildSetOptionsUsingDispatch,
  getFilterOptions,
  getProducts
} from './ShopPageService';
import { Page } from '../../Page';
import { Pagination } from './Pagination';
import { useLocation } from 'react-router';
import { buildSearchQuery, buildSearchQueryObj } from '../../../utils/utils';
import { useShopContext } from '../../../context/ShopContext';
import { ShopHeader } from './ShopHeader';
import { ProductFilterSidebar } from './ProductFilterSidebar/ProductFilterSidebar';
import constants from '../../../utils/constants';

export const ShopPage = () => {
  const location = useLocation();
  const {
    products, setProducts,
    showSidebar,
    dispatchFilterOptions
  } = useShopContext();

  const {
    FILTERABLE_PRODUCT_ATTRIBUTES: attributes
  } = constants
  
  const [apiError, setApiError] = useState('');
  const [currentPage, setCurrentPage] = useState(null)
  const [totalPages, setTotalPages] = useState(null)

  useEffect(() => {
    const searchQueryObj = buildSearchQueryObj(location.search)
    if (!searchQueryObj?.page) searchQueryObj.page = 0
    if (!searchQueryObj?.size) searchQueryObj.size = 12
    const shopPageQueries = buildSearchQuery(searchQueryObj)
    getProducts(
      shopPageQueries,
      setProducts,
      setCurrentPage,
      setTotalPages,
      setApiError
    );
  }, [
    location.search, 
    setCurrentPage,
    setTotalPages,
    setProducts,
    setApiError
  ])

  useEffect(() => {
    const buildSetOptions = buildSetOptionsUsingDispatch(dispatchFilterOptions)

    attributes.forEach((attribute) => {
      getFilterOptions(
        attribute,
        buildSetOptions(attribute),
        setApiError
      )
    })

  }, [setApiError, dispatchFilterOptions])

  return (
    <Page>
      <div className={styles.header}>
        <ShopHeader />
      </div>
      <div
        style={{gridTemplateColumns: showSidebar ? '2fr 7fr' : '1fr'}}
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