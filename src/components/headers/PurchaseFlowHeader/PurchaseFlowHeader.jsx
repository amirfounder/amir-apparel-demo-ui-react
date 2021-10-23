import React from 'react';
import { Button } from '../../Button';
import { CartIcon } from '../../icons/CartIcon/CartIcon';
import { WishlistIcon } from '../../icons/WishlistIcon/WishlistIcon';
import { Logo } from '../../Logo';
import styles from './PurchaseFlowHeader.module.scss'

export const PurchaseFlowHeader = () => {
  return (
    <div className={styles.main}>
      <div>
        <Logo />
      </div>
      <div className={styles.actions}>
        {/* <WishlistIcon />
        <CartIcon /> */}
        <Button type="secondary">
          Login / Register
        </Button>
      </div>
    </div>
  )
}