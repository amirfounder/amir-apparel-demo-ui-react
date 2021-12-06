export const buildPurchaseDTO = (
  shippingDetails,
  paymentDetails,
  sameShippingDetails,
  cart
) => ({
  firstname: shippingDetails.firstName,
  lastName: shippingDetails.lastName,
  email: shippingDetails.email,
  shippingDetails: {
    street: shippingDetails.street,
    streetOptional: shippingDetails.streetOptional,
    city: shippingDetails.city,
    state: shippingDetails.state,
    zipCode: shippingDetails.zipCode
  },
  billingAddress: {
    street: sameShippingDetails ? shippingDetails.street : paymentDetails.street,
    streetOptional: sameShippingDetails ? shippingDetails.streetOptional : paymentDetails.streetOptional,
    city: sameShippingDetails ? shippingDetails.city : paymentDetails.city,
    state: sameShippingDetails ? shippingDetails.state : paymentDetails.state,
    zipCode: sameShippingDetails ? shippingDetails.zipCode : paymentDetails.zipCode
  },
  creditCard: {
    cardholderName: paymentDetails.cardholderName,
    cardNumber: paymentDetails.cardNumber,
    expirationDate: paymentDetails.cvv,
    cvv: paymentDetails.cvv
  },
  lineItems: cart.map(lineItem => ({
    productId: lineItem.product.id,
    quantity: lineItem.quantity
  }))
})