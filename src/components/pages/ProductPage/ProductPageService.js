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