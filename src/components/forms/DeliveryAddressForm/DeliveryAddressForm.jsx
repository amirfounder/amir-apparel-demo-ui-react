import React from 'react';
import { TextInput } from '../../inputs/Text';
import styles from './DeliveryAddressForm.module.scss'

export const DeliveryAddressForm = (props) => {
  const {
    formValues,
    setFormValues
  } = props;

  return (
    <div className={styles.main}>
      <div
        style={{
          display: 'grid',
          columnGap: '1rem',
          gridTemplateColumns: '1fr 1fr'
        }}
      >
        <TextInput
          label='First Name'
          id='firstName'
        />
        <TextInput
          label='Last Name'
          id='lastName'
        />
      </div>
      <TextInput
        label='Email'
        id='email'
      />
      <TextInput
        label='Street'
        id='street'
      />
      <TextInput
        label='Street (Optional)'
        id='streetOptional'
      />
      <TextInput
        label='Zip Code'
        id='zipCode'
      />
    </div>
  )
}