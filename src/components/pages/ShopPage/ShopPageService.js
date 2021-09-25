import constants from "../../../utils/constants"
import { sendHttpRequest } from "../../../utils/httpHelper"
import { buildSearchQuery } from "../../../utils/utils"

export const buildShopPageSearchQuery = (searchQueryObj) => buildSearchQuery({
  page: searchQueryObj.page || 0,
  size: searchQueryObj.size || 12,
  sort: searchQueryObj.sort || null
})

export const getProducts = (searchQuery, setProducts, setCurrentPage, setTotalPages, setApiError) => {
  sendHttpRequest('GET', constants.PRODUCTS_ENDPOINT + searchQuery)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Error")
    })
    .then((body) => {
      setProducts(body.content);
      setTotalPages(body.totalPages)
      setCurrentPage(body.number + 1)
      setApiError('');
    })
    .catch(setApiError);
}
