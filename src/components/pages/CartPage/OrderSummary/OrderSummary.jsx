import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useCartContext } from '../../../../context/CartContext';
import { Button } from '../../../Button';
import { Heading } from '../../../Heading';
import styles from './OrderSummary.module.scss'
import { calculateCartTotal } from './OrderSummaryService';

export const OrderSummary = () => {
  const {
    cart
  } = useCartContext();
  const history = useHistory();

  const [cartTotal, setCartTotal] = useState(null);
  const [estimatedTax, setEstimatedTax] = useState(null);
  const [estimatedShipping, setEstimatedShipping] = useState(null);
  const [total, setTotal] = useState(null);
  
  useEffect(() => {
    const newCartTotal = calculateCartTotal(cart);
    const newEstimatedTax = 0;
    const newEstimatedShipping = 0;
    const newTotal = newCartTotal;

    setCartTotal(newCartTotal);
    setEstimatedTax(newEstimatedTax || '-')
    setEstimatedShipping(newEstimatedShipping || '-')
    setTotal(newTotal)
  }, [cart])

  const handleContinueToCheckoutClick = () => { history.push('/checkout') }

  return (
    <div>
      <div className={styles.header}>
        <Heading level='3' ignoreMargin>
          Order Summary
        </Heading>
      </div>
      <div className={styles.body}>
        <div>
          <div className={styles.orderSummaryLine}>
            <span>Total Price:</span>
            <span>${cartTotal}</span>
          </div>
          <div className={styles.orderSummaryLine}>
            <span>Est. Shipping:</span>
            <span>{estimatedShipping}</span>
          </div>
          <div className={styles.orderSummaryLine}>
            <span>Est. Tax:</span>
            <span>{estimatedTax}</span>
          </div>
          <div className={styles.orderSummaryLine}>
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
        {Array.isArray(cart) && cart.length > 0 && <div className={styles.buttons}>
          <Button
            size='medium'
            type='secondary'
            onClick={handleContinueToCheckoutClick}
          >
            Continue to Checkout
          </Button>
        </div>}
      </div>
    </div>
  )
}