import React from 'react';
import styles from './QuantityPicker.module.scss'
import { setQuantityService } from './QuantityPickerService';

export const QuantityPicker = (props) => {
  const {
    quantity,
    setQuantity,
    inputDataTestId,
    labelDataTestId
  } = props

  const handleOnChange = (e) => setQuantityService(e.target.value, setQuantity);

  return (
    <div className={styles.main}>
      <label
        className={styles.label}
        data-testid={labelDataTestId || 'quantity-picker-label'}
        htmlFor='quantityPicker'
      >
        <span>
          Quantity:
        </span>
        <input
          type="number"
          data-testid={inputDataTestId || 'quantity-picker-input'}
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