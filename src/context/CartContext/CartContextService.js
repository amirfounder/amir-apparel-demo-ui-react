import { getDeepCopy } from "../../utils/utils";

export const cartReducer = (state, action) => {
  const {
    product,
    quantity,
    type
  } = action;

  switch (type) {
    case 'add':
      const indexOfExistingProduct = state
        .map((cartItem) => cartItem.id)
        .indexOf(product.id)
      if (indexOfExistingProduct === -1) {
        return [...state, { ...product, quantity: quantity }]
      } else {
        const stateCopy = getDeepCopy(state);
        const existingProduct = stateCopy.splice(indexOfExistingProduct, 1)[0];
        existingProduct.quantity += quantity;
        return [...stateCopy, existingProduct];
      }
  }
}