import React from 'react';
import styles from './CartPage.module.scss'
import { useCartContext } from '../../../context/CartContext';
import { CartItem } from './CartItem';
import { Heading } from '../../Heading';
import { ContainedPage } from '../../ContainedPage';

export const CartPage = () => {
  const {
    cart
  } = useCartContext();

  return (
    <ContainedPage>
      <Heading level={1}>Your Cart</Heading>
      <div className={styles.columns}>
        <div>
          {Array.isArray(cart) && cart.map((product) => (
            <CartItem product={product} />
          ))}
        </div>
        <div>
          test
        </div>
      </div>
    </ContainedPage>
  )
}