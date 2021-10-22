import React from 'react';
import { TextInput } from '../../inputs/Text';
import styles from './PaymentDetailsForm.module.scss'

export const PaymentDetailsForm = (props) => {
  const {
    formErrors,
    formValues,
    setFormValues,
    handleCompletePurchase
  } = props;

  const handleOnChange = (e) => {
    const { value, id } = e.target;
    setFormValues((prevState) => ({ ...prevState, [id]: value }))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCompletePurchase()
    }
  }

  return (
    <div className={styles.main}>
      <TextInput
        label='Cardholder Name'
        id='cardholderName'
        value={formValues?.cardholderName}
        error={formErrors?.cardholderName}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <TextInput
        label='Credit Card'
        id='creditCard'
        value={formValues?.creditCard}
        error={formErrors?.creditCard}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <div
        style={{
          display: 'grid',
          columnGap: '1rem',
          gridTemplateColumns: '1fr 1fr'
        }}
      >
        <TextInput
          label='Expiration Date'
          id='expirationDate'
          value={formValues?.expirationDate}
          error={formErrors?.expirationDate}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        <TextInput
          label='CVV'
          id='cvv'
          value={formValues?.cvv}
          error={formErrors?.cvv}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  )
}