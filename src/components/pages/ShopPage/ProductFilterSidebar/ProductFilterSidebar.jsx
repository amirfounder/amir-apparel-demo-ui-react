import React, { useReducer } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useShopContext } from '../../../../context/ShopContext';
import constants from '../../../../utils/constants';
import { buildSearchQuery, buildSearchQueryObject, filterSearchQueryObjByKeys } from '../../../../utils/utils';
import { Button } from '../../../Button';
import { ProductFilterToggle } from '../ProductFilterToggle/ProductFilterToggle';
import styles from './ProductFilterSidebar.module.scss'
import { buildFilterOptionsSearchQueryObj, buildShowFilterTogglerFnUsingDispatcher, showFiltersReducer } from './ProductFilterSidebarService';

export const ProductFilterSidebar = () => {
  const {
    showSidebar,
    filterOptions,
  } = useShopContext()

  const location = useLocation();
  const history = useHistory();

  const {
    FILTERABLE_PRODUCT_ATTRIBUTES: attributes
  } = constants

  const showFiltersInitialState = Object.fromEntries(attributes.map((attribute) => [attribute, false]))
  const [state, showFiltersDispatcher] = useReducer(showFiltersReducer, showFiltersInitialState);

  const buildShowFilterTogglerFn = buildShowFilterTogglerFnUsingDispatcher(showFiltersDispatcher)

  const handleApplyButtonClick = () => {
    const filterOptionsSearchQueryObj = buildFilterOptionsSearchQueryObj(filterOptions);

    const searchQueryObj = buildSearchQueryObject(location.search)
    const pageableSearchQueryObj = filterSearchQueryObjByKeys(searchQueryObj, ['page', 'size', 'sort'])

    if ('page' in pageableSearchQueryObj) {
      pageableSearchQueryObj.page = '0';
    }

    const newSearchQueryObj = {
      ...pageableSearchQueryObj,
      ...filterOptionsSearchQueryObj
    }

    const searchQuery = buildSearchQuery(newSearchQueryObj);
    history.push(location.pathname + searchQuery)
  }

  const handleClearButtonClick = () => {
    const searchQueryObj = buildSearchQueryObject(location.search);
    const pageableSearchQueryObj = filterSearchQueryObjByKeys(searchQueryObj, ['page', 'size', 'sort'])

    if ('page' in pageableSearchQueryObj) {
      pageableSearchQueryObj.page = '0'
    }

    const newSearchQueryObj = {
      ...pageableSearchQueryObj
    }

    const searchQuery = buildSearchQuery(newSearchQueryObj)
    history.push(location.pathname + searchQuery)
  }

  return (
    <div
      className={styles.main}
      hidden={!showSidebar}
    >
      <ProductFilterToggle
        name='Demographics'
        show={state?.demographic}
        toggleShow={buildShowFilterTogglerFn('demographic')}
        attribute='demographic'
        options={filterOptions?.demographic}
      />
      <ProductFilterToggle
        name='Colors'
        show={state?.color}
        toggleShow={buildShowFilterTogglerFn('color')}
        attribute='color'
        options={filterOptions?.color}
      />
      <ProductFilterToggle
        name='Type'
        show={state?.type}
        toggleShow={buildShowFilterTogglerFn('type')}
        attribute='type'
        options={filterOptions?.type}
      />
      <ProductFilterToggle
        name='Materials'
        show={state?.material}
        toggleShow={buildShowFilterTogglerFn('material')}
        attribute='material'
        options={filterOptions?.material}
      />
      <div className={styles.buttons}>
        <Button onClick={handleApplyButtonClick}>Apply</Button>
        <Button onClick={handleClearButtonClick} type="secondary">Clear</Button>
      </div>
    </div>
  )
}