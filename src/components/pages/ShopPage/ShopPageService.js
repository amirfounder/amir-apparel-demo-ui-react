import constants from "../../../utils/constants"
import { sendHttpRequest } from "../../../utils/httpHelper"

export const getProducts = (setProducts, setIsApiError, setApiErrorMessage) => {
  sendHttpRequest('GET', constants.PRODUCTS_ENDPOINT)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Error")
    })
    .then((body) => {
      setProducts(body);
      setIsApiError(false);
    })
    .catch((error) => {
      setIsApiError(true)
      setApiErrorMessage(error);
    })
}