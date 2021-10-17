import React, { useState } from 'react';
import { DeliveryAddressForm } from '../../forms';
import { Heading } from '../../Heading';
import { Page } from '../../Page';
import { CartSummary } from './CartSummary';
import styles from './CheckoutPage.module.scss'
import { WidgetContainer } from './WidgetContainer';
import { Button } from '../../Button'
import { PaymentDetailsForm } from '../../forms/PaymentDetailsForm';
import { validateDeliveryAddressForm, validatePaymentDetailsForm } from './CheckoutPageService';

export const CheckoutPage = () => {
  const [deliveryAddressState, setDeliveryAddressState] = useState({});
  const [paymentDetailsState, setPaymentDetailsState] = useState({});
  const [deliveryAddressErrorsState, setDeliveryAddressErrorsState] = useState({});
  const [paymentDetailsErrorsState, setPaymentDetailsErrorsState] = useState({});

  const handleCompletePurchase = () => {
    const
      deliveryAddressErrors = validateDeliveryAddressForm(deliveryAddressState),
      paymentDetailsErrors = validatePaymentDetailsForm(paymentDetailsState);
    
    const formsAreValid =
      Object.keys(deliveryAddressErrors).length === 0 &&
      Object.keys(paymentDetailsErrors).length === 0

    if (formsAreValid) {
      //
    } else {
      //
    }

    setDeliveryAddressErrorsState(deliveryAddressErrors)
    setPaymentDetailsErrorsState(paymentDetailsErrors)
  }

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
            <WidgetContainer name="1. Delivery Address">
              <DeliveryAddressForm />
            </WidgetContainer>
            <WidgetContainer name="2. Payment Details">
              <PaymentDetailsForm />
            </WidgetContainer>
            <Button size='medium'>
              Complete Purchase
            </Button>
          </div>
        </div>
      </div>
    </Page>
  )
}