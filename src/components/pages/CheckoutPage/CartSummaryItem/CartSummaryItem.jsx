import React from 'react';
import styles from './CartSummaryItem.module.scss'

export const CartSummaryItem = (props) => {
  const {
    lineItem
  } = props;

  return (
    <div className={styles.main}>
      <div>{lineItem.product.name} ({lineItem.quantity})</div>
      <div>${Number(lineItem.quantity * lineItem.product.price).toFixed(2)}</div>
    </div>
  )
}