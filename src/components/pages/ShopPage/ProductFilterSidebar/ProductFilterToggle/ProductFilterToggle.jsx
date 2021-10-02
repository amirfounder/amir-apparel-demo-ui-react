import React from 'react';
import { useShopContext } from '../../../../../context/ShopContext';
import { capitalize } from '../../../../../utils/utils';
import { Heading } from '../../../../Heading';
import { CheckboxInput } from '../../../../inputs/Checkbox/CheckboxInput';
import { Toggle } from '../../../../Toggle/Toggle';
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
          className={styles.toggleHeader}
          show={show}
          toggleShow={toggleShow}
        >
          <Heading level={4}>
            {name}
          </Heading>
        </Toggle.Header>
        <Toggle.Content
          className={styles.toggleContent}
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
                label={capitalize(key)}
              />
            )
          })}
        </Toggle.Content>
      </Toggle>
    </div>
  )
}