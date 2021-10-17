import React from 'react';
import { Page } from '../../Page';
import { CartSummary } from './CartSummary';
import styles from './CheckoutPage.module.scss'

export const CheckoutPage = () => {
  return (
    <Page>
      <div
        className={styles.main}
        data-testid='checkout-page'
      >
        <div className={styles.column}>
          <CartSummary />
        </div>
        <div className={styles.column}>
          Forms
        </div>
      </div>
    </Page>
  )
}