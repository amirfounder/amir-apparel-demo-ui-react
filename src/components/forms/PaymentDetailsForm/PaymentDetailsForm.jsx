import React from 'react';
import { TextInput } from '../../inputs/Text';
import styles from './PaymentDetailsForm.module.scss'

export const PaymentDetailsForm = (props) => {
  const {
    formValues,
    setFormValues
  } = props;

  return (
    <div className={styles.main}>
      <TextInput
        label='Credit Card'
        id='creditCard'
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
          id='expiration'
        />
        <TextInput
          label='CVV'
          id='cvv'
        />
      </div>
    </div>
  )
}