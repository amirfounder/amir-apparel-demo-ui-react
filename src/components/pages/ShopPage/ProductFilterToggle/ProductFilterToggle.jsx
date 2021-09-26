import React from 'react';
import { useShopContext } from '../../../../context/ShopContext';
import { Checkbox } from '../../../inputs/Checkbox';
import { Toggle } from '../../../Toggle/Toggle';
import styles from './ProductFilterToggle.module.scss'

export const ProductFilterToggle = (props) => {
  const {
    name,
    show,
    toggleShow,
    options,
    attribute
  } = props;

  const {
    dispatchFilterOptions
  } = useShopContext();

  const handleCheckboxCheck = (e) => {
    const { id: key, checked: value } = e.target;
    dispatchFilterOptions({ type: 'update', value, key, attribute})
  }

  return (
    <div className={styles.main}>
      <Toggle>
        <Toggle.Header
          customClass
          show={show}
          toggleShow={toggleShow}
        >
          {name}
        </Toggle.Header>
        <Toggle.Content
          customClass
          show={show}
        >
          {options && Object.entries(options).map((option) => {
            const [key, value] = option;
            return (
              <Checkbox
                id={key}
                onChange={handleCheckboxCheck}
                value={value}
                label={key}
              />
            )
          })}
        </Toggle.Content>
      </Toggle>
    </div>
  )
}