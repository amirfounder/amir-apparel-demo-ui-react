import { getDeepCopy } from "../../utils/utils";

export const cartReducer = (state, action) => {
  const {
    product,
    quantity,
    type
  } = action;

  switch (type) {
    case 'add':
      const indexOfExistingLineItem = state
        .map((cartItem) => cartItem?.product?.id)
        .indexOf(product.id)
      if (indexOfExistingLineItem === -1) {
        return [ ...state, { product, quantity }]
      } else {
        const stateCopy = getDeepCopy(state);
        const existingLineItem = stateCopy.splice(indexOfExistingLineItem, 1)[0];
        existingLineItem.quantity += quantity;
        return [...stateCopy, existingLineItem];
      }
    default: {}
  }
}