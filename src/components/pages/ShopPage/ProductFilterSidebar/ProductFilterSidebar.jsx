import React, { useReducer } from 'react';
import { useShopContext } from '../../../../context/ShopContext';
import constants from '../../../../utils/constants';
import { ProductFilterToggle } from '../ProductFilterToggle/ProductFilterToggle';
import styles from './ProductFilterSidebar.module.scss'

export const ProductFilterSidebar = () => {
  const {
    showSidebar,
    filterOptions
  } = useShopContext()

  const {
    FILTERABLE_PRODUCT_ATTRIBUTES: attributes
  } = constants

  const showFiltersInitialState = Object.fromEntries(attributes.map((attribute) => [attribute, false]))

  const showFiltersReducer = (state, action) => {
    if (Object.keys(showFiltersInitialState).includes(action.type)) {
      return { ...state, [action.type]: !state[action.type]}
    }
  }

  const [state, dispatch] = useReducer(showFiltersReducer, showFiltersInitialState);

  const buildToggler = (attribute) => () => dispatch({ type: attribute })

  return (
    <div
      className={styles.main}
      hidden={!showSidebar}
    >
      <ProductFilterToggle
        name='Demographics'
        show={state?.demographic}
        toggleShow={buildToggler('demographic')}
        options={filterOptions.demographic}
      />
      <ProductFilterToggle
        name='Colors'
        show={state?.color}
        toggleShow={buildToggler('color')}
        options={filterOptions.color}
      />
      <ProductFilterToggle
        name='Type'
        show={state?.type}
        toggleShow={buildToggler('type')}
        options={filterOptions.type}
      />
      <ProductFilterToggle
        name='Materials'
        show={state?.material}
        toggleShow={buildToggler('material')}
        options={filterOptions.material}
      />
    </div>
  )
}