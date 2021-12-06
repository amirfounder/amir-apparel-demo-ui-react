import React from 'react';
import constants from '../../../utils/constants';
import { SelectInput, TextInput } from '../../inputs';
import { InputColumns } from '../InputColumns';
import styles from './PaymentDetailsForm.module.scss'

export const PaymentDetailsForm = (props) => {
  const {
    formErrors,
    formValues,
    setFormValues,
    handleCompletePurchase,
    showBillingAddressFields
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
      {
        showBillingAddressFields && (
          <>
            <InputColumns columns='1fr 1fr'>
              <TextInput
                label='Billing Street'
                id='street'
                value={formValues?.street}
                error={formErrors?.street}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
              />
              <TextInput
                label='Billing Street (Optional)'
                id='streetOptional'
                value={formValues?.streetOptional}
                error={formErrors?.streetOptional}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
              />
            </InputColumns>
            <InputColumns columns='2fr 2fr 1fr'>
              <TextInput
                label='Billing City'
                id='city'
                value={formValues?.city}
                error={formErrors?.city}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
              />
              <SelectInput
                options={constants.STATES}
                label='Billing State'
                id='state'
                value={formValues?.state}
                error={formErrors?.state}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
              />
              <TextInput
                label='Billing Zip Code'
                id='zipCode'
                value={formValues?.zipCode}
                error={formErrors?.zipCode}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
              />
            </InputColumns>
          </>
        )
      }
      <InputColumns columns='3fr 1fr 1fr'>
        <TextInput
          label='Credit Card'
          id='cardNumber'
          value={formValues?.cardNumber}
          error={formErrors?.cardNumber}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
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
      </InputColumns>
    </div>
  )
}