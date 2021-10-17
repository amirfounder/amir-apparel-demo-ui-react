import React from 'react';
import { useCartContext } from '../../../../context/CartContext';
import { Heading } from '../../../Heading';
import { CartSummaryItem } from '../CartSummaryItem';
import styles from './CartSummary.module.scss'

export const CartSummary = () => {
  const {
    cart
  } = useCartContext()

  return (
    <div className={styles.main}>
      {/* <div className={styles.header}>
        <Heading ignoreMargin level='3'>
          Cart Summary
        </Heading>
      </div> */}
      <div className={styles.body}>
        {Array.isArray(cart) && cart.map((product) => (
          <CartSummaryItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}