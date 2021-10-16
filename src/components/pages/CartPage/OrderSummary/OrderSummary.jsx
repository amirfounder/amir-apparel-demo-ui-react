import React from 'react';
import { useCartContext } from '../../../../context/CartContext';
import { Heading } from '../../../Heading';
import styles from './OrderSummary.module.scss'
import { calculateTotalPrice } from './OrderSummaryService';

export const OrderSummary = () => {
  const {
    cart
  } = useCartContext();

  return (
    <div>
      <div className={styles.header}>
        <Heading ignoreMargin>
          Order Summary
        </Heading>
      </div>
      <div className={styles.body}>
        <div className={styles.orderSummaryLine}>
          <span>Total Price:</span>
          <span>{calculateTotalPrice(cart)}</span>
        </div>
      </div>
    </div>
  )
}