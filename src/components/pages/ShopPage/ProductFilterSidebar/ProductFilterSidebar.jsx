import React, { useReducer } from 'react';
import { useShopContext } from '../../../../context/ShopContext';
import { Toggle } from '../../../Toggle/Toggle';
import { ProductFilterToggle } from '../ProductFilterToggle/ProductFilterToggle';
import styles from './ProductFilterSidebar.module.scss'

export const ProductFilterSidebar = () => {

  const {
    showSidebar
  } = useShopContext()

  const showFiltersInitialState = {
    demographics: false,
    materials: false,
    types: false,
    color: false
  }

  const showFiltersReducer = (state, action) => {
    if (Object.keys(showFiltersInitialState).includes(action.type)) {
      return { ...state, [action.type]: !state[action.type]}
    }
  }

  const [state, dispatch] = useReducer(showFiltersReducer, showFiltersInitialState);

  const toggleDemographicsFilters = () => dispatch({ type: 'demographics' })
  const toggleMaterialsFilters = () => dispatch({ type: 'materials' })

  return (
    <div
      className={styles.main}
      hidden={!showSidebar}
    >
      <Toggle>
        <ProductFilterToggle
          name='Demographics'
          show={state?.demographics}
          toggleShow={toggleDemographicsFilters}
        />
      </Toggle>
    </div>
  )
}