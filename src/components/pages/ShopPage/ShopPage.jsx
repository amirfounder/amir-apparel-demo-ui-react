import React, { useEffect, useState } from 'react';
import styles from './ShopPage.module.scss'
import { ProductGrid } from './ProductGrid';
import {
  buildSetFilterOptionsFnFn,
  buildShopPageSearchQuery,
  getFilterOptionsByAttribute,
  getProducts
} from './ShopPageService';
import { Page } from '../../Page';
import { Pagination } from './Pagination';
import { useLocation } from 'react-router';
import { useShopContext } from '../../../context/ShopContext';
import { ShopHeader } from './ShopHeader';
import { ProductFilterSidebar } from './ProductFilterSidebar/ProductFilterSidebar';
import constants from '../../../utils/constants';

export const ShopPage = () => {
  const location = useLocation();
  const {
    products, setProducts,
    showSidebar,
    filterOptionsDispatcher
  } = useShopContext();

  const {
    FILTERABLE_PRODUCT_ATTRIBUTES: attributes
  } = constants
  
  const [apiError, setApiError] = useState('');
  const [currentPage, setCurrentPage] = useState(null)
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const shopPageQuery = buildShopPageSearchQuery(location.search);
    getProducts(
      shopPageQuery,
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
    const buildSetFilterOptionsFn = buildSetFilterOptionsFnFn(filterOptionsDispatcher);
    attributes.forEach((attribute) => {
      const setFilterOptions = buildSetFilterOptionsFn(attribute)
      getFilterOptionsByAttribute(
        attribute,
        location.search,
        setFilterOptions,
        setApiError
      )
    })
  }, [
    attributes,
    filterOptionsDispatcher,
    setApiError,
    location.search
  ])

  return (
    <Page dataTestId="shop-page">
      <div className={styles.header}>
        <ShopHeader />
      </div>
      <div
        style={{gridTemplateColumns: showSidebar ? '2fr 7fr' : '1fr'}}
        className={styles.main}
        data-testid='main-container'
      >
        <ProductFilterSidebar />
        <div>
          {apiError && <div data-testid="api-error-message">There was an error reaching our servers. Please try again later</div>} 
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