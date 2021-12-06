import { sendHttpRequest } from "../../../utils/httpHelper"
import { scrollToTop } from "../../../utils/utils"
import {
  validateAlphanumeric,
  validateCardNumber,
  validateCVV,
  validateEmail,
  validateRequired,
  validateState,
  validatExpirationDate,
  validateZipCode
} from "../../../utils/validation"

export const validateShippingDetailsForm = (formValues) => {
  return minimizeFormErrorObject({
    firstName: validateAlphanumeric(formValues?.firstName),
    lastName: validateAlphanumeric(formValues?.lastName),
    email: validateEmail(formValues?.email),
    street: validateRequired(formValues?.street),
    city: validateRequired(formValues?.city),
    state: validateState(formValues?.state),
    zipCode: validateZipCode(formValues?.zipCode)
  })
}

export const validatePaymentDetailsForm = (formValues, sameShippingAddress) => {
  return minimizeFormErrorObject({
    street: !sameShippingAddress && validateRequired(formValues?.street),
    city: !sameShippingAddress && validateRequired(formValues?.city),
    zipCode: !sameShippingAddress && validateZipCode(formValues?.zipCode),
    state: !sameShippingAddress && validateState(formValues?.state),
    cardholderName: validateAlphanumeric(formValues?.cardholderName),
    cardNumber: validateCardNumber(formValues?.cardNumber),
    expirationDate: validatExpirationDate(formValues?.expirationDate),
    cvv: validateCVV(formValues?.cvv)
  })
}

export const minimizeFormErrorObject = (errors) => {
  return Object.fromEntries(
    Object.entries(errors).filter(([, value]) => !!value)
  )
}

export const savePurchase = (
  purchaseDTO,
  cartDispatcher,
  history,
  setApiError
) => {
  sendHttpRequest('POST', '/purchases', purchaseDTO)
    .then((response) => {
      if (response.ok) {
        history.push('/checkout/thank-you');
        cartDispatcher({ type: 'clear' });
        scrollToTop();
      }
      throw new Error(response.statusText)
    })
    .catch((error) => {
      console.log(error);
      setApiError(error);
    })
}