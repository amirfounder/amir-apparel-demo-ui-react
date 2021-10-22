import React from 'react';
import { TextInput } from '../../inputs/Text';
import styles from './DeliveryAddressForm.module.scss'

export const DeliveryAddressForm = (props) => {
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
          value={formValues?.firstName}
          error={formErrors?.firstName}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        <TextInput
          label='Last Name'
          id='lastName'
          value={formValues?.lastName}
          error={formErrors?.lastName}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <TextInput
        label='Email'
        id='email'
        value={formValues?.email}
        error={formErrors?.email}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <TextInput
        label='Street'
        id='street'
        value={formValues?.street}
        error={formErrors?.street}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <TextInput
        label='Street (Optional)'
        id='streetOptional'
        value={formValues?.streetOptional}
        error={formErrors?.streetOptional}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <TextInput
        label='City'
        id='city'
        value={formValues?.city}
        error={formErrors?.city}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <TextInput
        label='Zip Code'
        id='zipCode'
        value={formValues?.zipCode}
        error={formErrors?.zipCode}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}