import React from 'react';
import { TextInput } from '../../inputs/Text';
import styles from './DeliveryAddressForm.module.scss'

export const DeliveryAddressForm = (props) => {
  const {
    values
  } = props;

  return (
    <div className={styles.main}>
      <TextInput
        label='First Name'
        id='firstName'
      />
      <TextInput
        label='Last Name'
        id='lastName'
      />
      <TextInput
        label='Email'
        id='email'
      />
      <TextInput
        label='Phone Number'
        id='phone'
      />
    </div>
  )
}