import {
  validateAlphanumeric,
  validateCreditCard,
  validateCVV,
  validateEmail,
  validateRequired,
  validatExpirationDate,
  validateZipCode
} from "../../../utils/validation"

export const validateDeliveryAddressForm = (formValues) => {
  return minimizeFormErrorObject({
    firstName: validateAlphanumeric(formValues?.firstName),
    lastName: validateAlphanumeric(formValues?.lastName),
    street: validateRequired(formValues?.street),
    email: validateEmail(formValues?.email),
    zipCode: validateZipCode(formValues?.zipCode)
  })
}

export const validatePaymentDetailsForm = (formValues) => {
  return minimizeFormErrorObject({
    creditCard: validateCreditCard(formValues?.creditCard),
    expirationDate: validatExpirationDate(formValues?.expirationDate),
    cvv: validateCVV(formValues?.cvv)
  })
}

export const minimizeFormErrorObject = (errors) => {
  return Object.fromEntries(
    Object.entries(errors).filter((entry) => {
      const [_, value] = entry;
      return value !== ''
    })
  )
}