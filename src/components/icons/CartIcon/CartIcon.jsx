import React from 'react';
import styles from './CartIcon.module.scss'
import { useCartContext } from '../../../context/CartContext';
import { generateCartBadgeNumber } from './CartIconService';
import { BiCartAlt } from 'react-icons/bi';
import { useHistory } from 'react-router';
import { Badge } from '../Badge';

export const CartIcon = () => {
  const {
    cart
  } = useCartContext();
  const history = useHistory();

  const handleCartIconClick = () => history.push('/cart')

  return (
    <div
      className={styles.main}
    >
      <BiCartAlt
        data-testid='main-header-cart-icon'
        onClick={handleCartIconClick}
        className={styles.icon}
      />
      <Badge>
        {generateCartBadgeNumber(cart)}
      </Badge>
    </div>
  )
}