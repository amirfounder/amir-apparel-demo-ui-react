import constants from "../../../utils/constants"
import { sendHttpRequest } from "../../../utils/httpHelper"

export const getProducts = (setProducts, setApiError) => {
  sendHttpRequest('GET', constants.PRODUCTS_ENDPOINT)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Error")
    })
    .then((body) => {
      setProducts(body);
      setApiError('');
    })
    .catch(setApiError)
}