import React from 'react';
import styles from './CartPage.module.scss'
import { useCartContext } from '../../../context/CartContext';
import { CartItem } from './CartItem';
import { Heading } from '../../Heading';
import { Page } from '../../Page';
import { OrderSummary } from './OrderSummary';

export const CartPage = () => {
  const {
    cart
  } = useCartContext();

  return (
    <Page>
      <Heading level='1'>Cart</Heading>
      <div className={styles.columns}>
        <div>
          {
            Array.isArray(cart) && cart.length > 0
              ? cart.map((ele) => (<CartItem lineItem={ele} />))
              : 'There are no products in your cart'
          }
        </div>
        <div className={styles.orderSummaryContainer}>
          <OrderSummary />
        </div>
      </div>
    </Page>
  )
}