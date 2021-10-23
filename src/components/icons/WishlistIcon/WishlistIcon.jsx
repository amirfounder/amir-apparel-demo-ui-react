import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import styles from './WishlistIcon.module.scss'

export const WishlistIcon = () => {
  return (
    <div>
      <BiShoppingBag
        className={styles.icon}
      />
    </div>
  )
}