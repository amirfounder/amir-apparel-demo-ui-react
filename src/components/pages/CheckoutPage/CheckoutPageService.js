import {
  validateAlphanumeric,
  validateCreditCard,
  validateCVV,
  validateEmail,
  validatExpirationDate,
  validateZipCode
} from "../../../utils/validation"

export const validateDeliveryAddressForm = (formValues) => {
  return cleanFormErrorsObject({
    firstName: validateAlphanumeric(formValues.firstName),
    lastName: validateAlphanumeric(formValues.lastName),
    email: validateEmail(formValues.email),
    zipCode: validateZipCode(formValues.zipCode)
  })
}

export const validatePaymentDetailsForm = (formValues) => {
  return cleanFormErrorsObject({
    creditCard: validateCreditCard(formValues.creditCard),
    expirationDate: validatExpirationDate(formValues.expirationDate),
    cvv: validateCVV(formValues.cvv)
  })
}

export const cleanFormErrorsObject = (errors) => {
  return Object.fromEntries(
    Object.entries(errors).filter((entry) => {
      const [_, value] = entry;
      return value !== ''
    })
  )
}