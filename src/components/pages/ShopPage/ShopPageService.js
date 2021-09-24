import constants from "../../../utils/constants"
import { sendHttpRequest } from "../../../utils/httpHelper"
import { buildSearchQuery } from "../../../utils/utils"

const buildShopPageSearchQuery = (query) => buildSearchQuery({
  page: query.get('page'),
  size: query.get('size') || 12,
  sort: query.get('sort')
})

export const getProducts = (query, setProducts, setApiError) => {
  const searchQuery = buildShopPageSearchQuery(query);
  sendHttpRequest('GET', constants.PRODUCTS_ENDPOINT + searchQuery)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Error")
    })
    .then((body) => {
      setProducts(body.content);
      setApiError('');
    })
    .catch(setApiError);
}
