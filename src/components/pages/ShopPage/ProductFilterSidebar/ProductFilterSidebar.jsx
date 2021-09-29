import React, { useReducer } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useShopContext } from '../../../../context/ShopContext';
import constants from '../../../../utils/constants';
import { buildSearchQuery, buildSearchQueryObj, filterSearchQueryObjByKeys } from '../../../../utils/utils';
import { Button } from '../../../Button';
import { ProductFilterToggle } from '../ProductFilterToggle/ProductFilterToggle';
import styles from './ProductFilterSidebar.module.scss'
import { buildFilterOptionsSearchQueryObj } from './ProductFilterSidebarService';

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
  
  const showFiltersReducer = (state, action) => {
    if (Object.keys(showFiltersInitialState).includes(action.type)) {
      return { ...state, [action.type]: !state[action.type]}
    }
  }
  const showFiltersInitialState = Object.fromEntries(attributes.map((attribute) => [attribute, false]))
  const [state, dispatch] = useReducer(showFiltersReducer, showFiltersInitialState);

  const buildToggler = (attribute) => () => dispatch({ type: attribute })

  const handleApplyButtonClick = () => {
    const filterOptionsSearchQueryObj = buildFilterOptionsSearchQueryObj(filterOptions);

    const urlSearchQueryObj = buildSearchQueryObj(location.search)
    const urlSearchQueryPageableObj = filterSearchQueryObjByKeys(urlSearchQueryObj, ['page', 'size', 'sort'])
    if ('page' in urlSearchQueryPageableObj) urlSearchQueryPageableObj.page = '0'

    const searchQueryObj = { ...urlSearchQueryPageableObj, ...filterOptionsSearchQueryObj }
    const searchQuery = buildSearchQuery(searchQueryObj);

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
        toggleShow={buildToggler('demographic')}
        attribute='demographic'
        options={filterOptions.demographic}
      />
      <ProductFilterToggle
        name='Colors'
        show={state?.color}
        toggleShow={buildToggler('color')}
        attribute='color'
        options={filterOptions.color}
      />
      <ProductFilterToggle
        name='Type'
        show={state?.type}
        toggleShow={buildToggler('type')}
        attribute='type'
        options={filterOptions.type}
      />
      <ProductFilterToggle
        name='Materials'
        show={state?.material}
        toggleShow={buildToggler('material')}
        attribute='material'
        options={filterOptions.material}
      />
      <div className={styles.buttons}>
        <Button onClick={handleApplyButtonClick}>Apply</Button>
        <Button type="secondary">Clear</Button>
      </div>
    </div>
  )
}