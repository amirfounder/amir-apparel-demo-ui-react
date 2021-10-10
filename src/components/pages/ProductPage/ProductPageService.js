import { sendHttpRequest } from "../../../utils/httpHelper"

export const getProductById = async (productId, setProduct, setApiError) => {
  await sendHttpRequest('GET', `/products/${productId}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Response status not OK")
    })
    .then((body) => {
      setProduct(body);
      setApiError('');
    })
    .catch(setApiError);
}