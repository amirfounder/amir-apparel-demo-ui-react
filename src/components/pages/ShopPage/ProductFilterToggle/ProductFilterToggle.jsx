import React from 'react';
import { Toggle } from '../../../Toggle/Toggle';
import styles from './ProductFilterToggle.module.scss'

export const ProductFilterToggle = (props) => {
  const {
    name,
    show,
    toggleShow
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
          description
        </Toggle.Content>
      </Toggle>
    </div>
  )
}