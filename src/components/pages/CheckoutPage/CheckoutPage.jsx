import React from 'react';
import { DeliveryAddressForm } from '../../forms';
import { Heading } from '../../Heading';
import { Page } from '../../Page';
import { CartSummary } from './CartSummary';
import styles from './CheckoutPage.module.scss'
import { FormContainer } from './WidgetContainer';

export const CheckoutPage = () => {
  return (
    <Page>
      <div
        className={styles.main}
        data-testid='checkout-page'
      >
        <div className={styles.header}>
          <Heading level='1'>
            Checkout
          </Heading>
        </div>
        <div className={styles.body}>
          <div className={styles.column}>
            <CartSummary />
          </div>
          <div className={styles.forms}>
            <FormContainer name="1. Delivery Address">
              <DeliveryAddressForm />
            </FormContainer>
            <FormContainer name="2. Payment Details">
              <DeliveryAddressForm />
            </FormContainer>
            <FormContainer name="3. Confirm Order">
              <DeliveryAddressForm />
            </FormContainer>
          </div>
        </div>
      </div>
    </Page>
  )
}