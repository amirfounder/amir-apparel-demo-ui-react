import React from 'react';
import styles from './CartSummaryItem.module.scss'

export const CartSummaryItem = (props) => {
  const {
    product
  } = props;

  return (
    <div className={styles.main}>
      <div>{product.name} ({product.quantity})</div>
      <div>${Number(product.quantity * product.price).toFixed(2)}</div>
    </div>
  )
}