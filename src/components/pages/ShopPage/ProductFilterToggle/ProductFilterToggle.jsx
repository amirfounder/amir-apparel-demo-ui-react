import React from 'react';
import { useShopContext } from '../../../../context/ShopContext';
import { CheckboxInput } from '../../../inputs/Checkbox/CheckboxInput';
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
    filterOptionsDispatcher
  } = useShopContext();

  const handleCheckboxCheck = (e) => {
    const { id: key, checked: value } = e.target;
    filterOptionsDispatcher({ type: 'update', value, key, attribute})
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
              <CheckboxInput
                id={key}
                onChange={handleCheckboxCheck}
                value={value}
                checked={value}
                label={key}
              />
            )
          })}
        </Toggle.Content>
      </Toggle>
    </div>
  )
}