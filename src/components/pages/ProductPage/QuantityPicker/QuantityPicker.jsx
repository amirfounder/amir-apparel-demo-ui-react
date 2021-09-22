import React from 'react';
import styles from './QuantityPicker.module.scss'

export const QuantityPicker = (props) => {
  const {
    quantity,
    setQuantity
  } = props

  const handleOnChange = (e) => {
    const { value } = e.target
    if (
      value.match(/^[0-9]+$/) ||
      value === ''
    ) {
      setQuantity(Number(e.target.value))
    }
  }

  return (
    <div className={styles.main}>
      <label
        className={styles.label}
        htmlFor='quantityPicker'
      >
        <span>
          Quantity:
        </span>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleOnChange}
          className={styles.input}
          id='quantityPicker'
        />
      </label>
    </div>
  )
}