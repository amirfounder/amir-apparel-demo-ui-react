import constants from "./constants"

const REGEX = {
  ALPHANUMERIC: /^[a-z\s\d0-9]+$/i,
  EMAIL: /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/i,
  ZIP_CODE: /^[0-9]{5}$/,
  CREDIT_CARD: /^[0-9]{16}$/i,
  EXPIRATION_DATE: /^[0-9]{2}\/[0-9]{2}$/i,
  CVV: /^[0-9]{3}$/i
}

const isNotEmpty = (value) => !!value && String(value).trim().length > 0
const isAlphanumeric = (value) => !!value && String(value).match(REGEX.ALPHANUMERIC)
const isEmail = (value) => !!value && String(value).match(REGEX.EMAIL)
const isZipCode = (value) => !!value && String(value).match(REGEX.ZIP_CODE)
const isCreditCard = (value) => !!value && String(value).match(REGEX.CREDIT_CARD)
const isExpirationDate = (value) => !!value && String(value).match(REGEX.EXPIRATION_DATE)
const isCVV = (value) => !!value && String(value).match(REGEX.CVV)
const isState = (value) => !!value && constants.STATES.includes(String(value))

export const validateAlphanumeric = (value) => {
  if (isNotEmpty(value)) {
    if (isAlphanumeric(value)) {
      return ''
    }
    return 'Field only accepts alphanumeric characters'
  }
  return 'Field cannot be empty'
}

export const validateEmail = (value) => {
  if (isNotEmpty(value)) {
    if (isEmail(value)) {
      return ''
    }
    return 'Field must be in valid email format'
  }
  return 'Field cannot be empty'
}

export const validateZipCode = (value) => {
  if (isNotEmpty(value)) {
    if (isZipCode(value)) {
      return ''
    }
    return 'Field must be a valid 5-digit zip code'
  }
  return 'Field cannot be empty'
}

export const validateRequired = (value) => {
  if (isNotEmpty(value)) {
    return ''
  }
  return 'This field is required'
}

export const validateCreditCardNumber = (value) => {
  if (isNotEmpty(value)) {
    if (isCreditCard(value)) {
      return ''
    }
    return 'Field only accepts valid 16 digit credit cards'
  }
  return 'Field cannot be emtpy'
}

export const validatExpirationDate = (value) => {
  if (isNotEmpty(value)) {
    if (isExpirationDate(value)) {
      if (true) {
        return ''
      }
      return 'Expiration date is expired. Try another card'
    }
    return 'Field must be a valid expiration date'
  }
  return 'Field cannot be emtpy'
}

export const validateCVV = (value) => {
  if (isNotEmpty(value)) {
    if (isCVV(value)) {
      return ''
    }
    return 'Field must contain a valid CVV code of 3 digits'
  }
  return 'Field cannot be emtpy'
}

export const validateState = (value) => {
  if (isNotEmpty(value)) {
    if (isState(value)) {
      return ''
    }
    return 'Field must be a valid state'
  }
  return 'Field cannot be empty'
}