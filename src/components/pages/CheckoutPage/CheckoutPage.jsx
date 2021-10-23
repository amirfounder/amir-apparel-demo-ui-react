import React, { useState } from 'react';
import { ShippingDetailsForm, PaymentDetailsForm } from '../../forms';
import { Heading } from '../../Heading';
import { Page } from '../../Page';
import { CartSummary } from './CartSummary';
import styles from './CheckoutPage.module.scss'
import { WidgetContainer } from './WidgetContainer';
import { Button } from '../../Button'
import { validateShippingDetailsForm, validatePaymentDetailsForm, savePurchase, buildPurchaseDTO } from './CheckoutPageService';
import { useCartContext } from '../../../context/CartContext';
import { useHistory } from 'react-router';
import { CheckboxInput } from '../../inputs';
import constants from '../../../utils/constants';

export const CheckoutPage = () => {
  const { cart, cartDispatcher } = useCartContext()
  const history= useHistory();

  const [shippingDetails, setShippingDetails] = useState({ state: constants.STATES[1] });
  const [paymentDetails, setPaymentDetails] = useState({ state: constants.STATES[1] });
  const [shippingDetailsErrorsState, setShippingDetailsErrorsState] = useState({});
  const [paymentDetailsErrorsState, setPaymentDetailsErrorsState] = useState({});
  const [sameShippingAddress, setSameShippingAddress] = useState(true);
  const [apiError, setApiError] = useState(false);

  const toggleSameShippingDetails = () => {
    setSameShippingAddress((prevState) => setSameShippingAddress(!prevState));
  }

  const handleCompletePurchase = () => {
    const
      shippingDetailsErrors = validateShippingDetailsForm(shippingDetails),
      paymentDetailsErrors = validatePaymentDetailsForm(paymentDetails, sameShippingAddress);
    
    const formsAreValid =
      Object.keys(shippingDetailsErrors).length === 0 &&
      Object.keys(paymentDetailsErrors).length === 0

    if (formsAreValid) {
      const purchaseDTO = buildPurchaseDTO(
        shippingDetails,
        paymentDetails,
        sameShippingAddress,
        cart
      );
      
      savePurchase(
        purchaseDTO,
        cartDispatcher,
        history,
        setApiError
      );
    }

    setShippingDetailsErrorsState(shippingDetailsErrors)
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
          {apiError && <p>There was an API error</p>}
        </div>
        <div className={styles.body}>
          <div className={styles.column}>
            <CartSummary />
          </div>
          <div className={styles.forms}>
            <WidgetContainer name="1. Shipping Address">
              <ShippingDetailsForm
                formErrors={shippingDetailsErrorsState}
                formValues={shippingDetails}
                setFormValues={setShippingDetails}
                handleCompletePurchase={handleCompletePurchase}
              />
            </WidgetContainer>
            <WidgetContainer name="2. Payment Details">
              <PaymentDetailsForm
                showBillingAddressFields={!sameShippingAddress}
                formErrors={paymentDetailsErrorsState}
                formValues={paymentDetails}
                setFormValues={setPaymentDetails}
                handleCompletePurchase={handleCompletePurchase}
              />
              <div>
                <CheckboxInput
                  onChange={toggleSameShippingDetails}
                  checked={sameShippingAddress}
                  label='Same shipping address as billing address'
                />
              </div>
            </WidgetContainer>
            <Button
              size='medium'
              onClick={handleCompletePurchase}
            >
              Complete Purchase
            </Button>
          </div>
        </div>
      </div>
    </Page>
  )
}