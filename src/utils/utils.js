export const parseIdFromProductPageNameAndIdParam = (slug) => {
  const slugArr = slug.split('-')
  return slugArr[slugArr.length - 1]
}

export const scrollToTop = () => window.scrollTo(0,0)

export const getDeepCopy = (object) => JSON.parse(JSON.stringify(object));

export const createCartProductDTO = (product) => {
  return {
    id: product?.id,
    name: product?.name,
    description: product?.description,
    imageSrc: product?.imageSrc
  }
}

/**
 * @name parseSearchQuery
 * @description parses a searchQueryString and returns an object with the key, value pairs
 * @param {String} search the search query in the format: "?key1=value1&key2=value2..."
 * @returns searchQueryObject
 */
export const parseSearchQuery = (search) => {
  const queryParams = search.substring(1).split("&");
  const searchQueryObj = {}
  queryParams.forEach((queryParam) => {
    const [name, value] = queryParam.split("=")
    searchQueryObj[name] = value
  })
  return searchQueryObj;
}

export const buildSearchQuery = (searchQueryObj) => {
  let query = '?'
  const queryParams = []
  Object.entries(searchQueryObj).forEach((entry) => {
    const [key, value] = entry;
    if (value !== null && value !== undefined) {
      queryParams.push(`${key}=${value}`)
    }
  })
  query += queryParams.join('&')
  return query;
}

export const rebuildSearchQueryWithUpdatedKeyValue = (currentSearchQuery, key, updatedValue) => {
  const searchQueryObj = parseSearchQuery(currentSearchQuery);
  searchQueryObj[key] = updatedValue;
  return buildSearchQuery(searchQueryObj)
}

export const capitalize = (word) => word.length > 1 && word.substring(0,1).toUpperCase() + word.substring(1)