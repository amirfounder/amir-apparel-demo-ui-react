import React from 'react';
import { Toggle } from '../../../Toggle/Toggle';
import styles from './ProductFilterToggle.module.scss'

export const ProductFilterToggle = (props) => {
  const {
    name,
    show,
    toggleShow,
    options
  } = props;

  return (
    <div className={styles.main}>
      <Toggle>
        <Toggle.Header
          show={show}
          toggleShow={toggleShow}
        >
          {name}
        </Toggle.Header>
        <Toggle.Content
          show={show}
        >
          {options && Object.entries(options).map((option) => (
            <div>
              {option[0]}
            </div>
          ))}
        </Toggle.Content>
      </Toggle>
    </div>
  )
}