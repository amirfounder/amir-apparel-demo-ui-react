import React from 'react';
import constants from '../../../utils/constants';
import { SelectInput, TextInput } from '../../inputs';
import { InputColumns } from '../InputColumns';
import styles from './ShippingDetailsForm.module.scss'

export const ShippingDetailsForm = (props) => {
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
      <InputColumns columns='1fr 1fr'>
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
      </InputColumns>
      <TextInput
        label='Email'
        id='email'
        value={formValues?.email}
        error={formErrors?.email}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <InputColumns columns='1fr 1fr'>
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
      </InputColumns>
      <InputColumns columns='2fr 2fr 1fr'>
        <TextInput
          label='City'
          id='city'
          value={formValues?.city}
          error={formErrors?.city}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        <SelectInput
          options={constants.STATES}
          label='State'
          id='state'
          value={formValues?.state}
          error={formErrors?.state}
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
      </InputColumns>
    </div>
  )
}