import React from 'react';
import { useCartContext } from '../../../../context/CartContext';
import { CartSummaryItem } from '../CartSummaryItem';
import styles from './CartSummary.module.scss'

export const CartSummary = () => {
  const {
    cart
  } = useCartContext()

  return (
    <div className={styles.main}>
      <div className={styles.body}>
        {Array.isArray(cart) && cart.map((ele) => (
          <CartSummaryItem
            key={ele.product.id}
            lineItem={ele}
          />
        ))}
      </div>
    </div>
  )
}