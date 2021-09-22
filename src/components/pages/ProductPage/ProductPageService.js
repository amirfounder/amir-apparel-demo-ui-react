import { sendHttpRequest } from "../../../utils/httpHelper"
import { getDeepCopy } from "../../../utils/utils";

export const getProductById = async (productId, setProduct, setApiError) => {
  await sendHttpRequest('GET', `/products/${productId}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((body) => {
      setProduct(body);
      setApiError('');
    })
    .catch(setApiError);
}

export const addItemToCart = (product, quantity, setCart) => {
  console.log('lol')
  setCart((prevCartState) => {
    const indexOfExistingProduct = prevCartState.map((cartItem) => cartItem.id).indexOf(product.id)
    if (indexOfExistingProduct === -1) {
      return [...prevCartState, product]
    } else {
      const prevCartStateCopy = getDeepCopy(prevCartState);
      const existingProduct = prevCartStateCopy.splice(indexOfExistingProduct, 1)[0]
      existingProduct.quantity += quantity
      return [...prevCartStateCopy, existingProduct]
    }
  })
}