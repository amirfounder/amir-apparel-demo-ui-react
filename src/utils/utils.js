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
 * @name buildSearchQueryObj
 * @description parses a searchQueryString and returns an object with the key, value pairs
 * @param {String} search the search query in the format: "?key1=value1&key2=value2..."
 * @returns searchQueryObject
 */
export const buildSearchQueryObj = (searchQuery) => Object
  .fromEntries(searchQuery
    .replace('?', '')
    .split("&")
    .map((keyValuePair) => keyValuePair.split("=")))

export const buildSearchQuery = (searchQueryObj) => '?' + Object
  .entries(sortObject(searchQueryObj))
  .filter(([_, value]) => value)
  .map(([key, value]) => `${key}=${value}`)
  .join('&')

export const updateSearchQueryKeyValuePair = (query, key, value) => {
  const searchQueryObj = buildSearchQueryObj(query);
  searchQueryObj[key] = value;
  return buildSearchQuery(searchQueryObj)
}

export const filterSearchQueryObjByKeys = (searchQueryObj, keys) => Object
  .fromEntries(
    Object
      .entries(searchQueryObj)
      .filter(([key, _]) => keys.includes(key))
  )

export const sortObject = (object) => Object.fromEntries(Object.keys(object).sort().map((key) => [key, object[key]]))

export const capitalize = (word) => word.length > 1 && word.substring(0,1).toUpperCase() + word.substring(1)