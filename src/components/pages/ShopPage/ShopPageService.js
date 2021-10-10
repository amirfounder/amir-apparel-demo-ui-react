import constants from "../../../utils/constants"
import { sendHttpRequest } from "../../../utils/httpHelper"
import { buildSearchQuery, buildSearchQueryObject, getDeepCopy } from "../../../utils/utils"


export const buildShopPageSearchQuery = (urlSearchQuery) => {
  const searchQueryObj = buildSearchQueryObject(urlSearchQuery)
  if (!searchQueryObj?.page) {
    searchQueryObj.page = 0
  }
  if (!searchQueryObj?.size) {
    searchQueryObj.size = 12
  }
  return buildSearchQuery(searchQueryObj)
}

export const buildNewAttributeOptionsBasedOnSearchQuery = (filterOptions, attribute, searchQuery) => {
  const searchQueryObject = buildSearchQueryObject(searchQuery);
  const filterOptionsCopy = getDeepCopy(filterOptions);
  if (attribute in searchQueryObject) {
    searchQueryObject[attribute]
      .split(',')
      .forEach((searchQueryValue) => {
        if (searchQueryValue in filterOptions) {
          filterOptionsCopy[searchQueryValue] = true;
        }
      })
  }
  return filterOptionsCopy;
}

export const buildSetFilterOptionsWithNewAttributeOptionsFnFn = (filterOptionsDispatcher) => {
  return (attribute) => {
    return (value) => {
      filterOptionsDispatcher({
        attribute,
        value,
        type: 'init'
      })
    }
  }
}

export const getProducts = (searchQuery, setProducts, setCurrentPage, setTotalPages, setApiError) => {
  sendHttpRequest('GET', constants.PRODUCTS_ENDPOINT + '/filter' + searchQuery)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(`Response status was ${response.status}`)
    })
    .then((body) => {
      setProducts(body.content);
      setTotalPages(body.totalPages)
      setCurrentPage(body.number + 1)
      setApiError('');
    })
    .catch(setApiError);
}

export const getFilterOptionsByAttribute = (attribute, searchQuery, setFilterOptionsWithNewAttributeOptions, setApiError) => {
  sendHttpRequest('GET', `/products/attribute/${attribute}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(`Response status was ${response.status}`)
    })
    .then((body) => {
      if (Array.isArray(body)) {
        const attributeOptions = Object.fromEntries(body.map((option) => [option.toLowerCase(), false]))
        const newAttributeOptions = buildNewAttributeOptionsBasedOnSearchQuery(attributeOptions, attribute, searchQuery)
        setFilterOptionsWithNewAttributeOptions(newAttributeOptions);
        setApiError('')
      }
    })
    .catch(setApiError);
}