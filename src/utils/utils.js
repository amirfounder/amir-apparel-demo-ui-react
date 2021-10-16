export const parseIdFromProductPageNameAndIdParam = (url) => {
  const urlArr = url.split('/')
  const indexOfProductBaseSlug = urlArr.indexOf('p')
  
  if (indexOfProductBaseSlug === -1) {
    return null;
  }

  const productNameAndIdSlug = urlArr
    .slice(
      indexOfProductBaseSlug + 1,
      indexOfProductBaseSlug + 2
    )
    .join('')
  
  const productNameAndIdSlugArr = productNameAndIdSlug.split('-') 
  return productNameAndIdSlugArr[productNameAndIdSlugArr.length - 1]
}

export const scrollToTop = () => window.scrollTo(0, 0)

export const getDeepCopy = (object) => JSON.parse(JSON.stringify(object));

export const buildCartProductDTO = (product) => ({
  id: product?.id,
  name: product?.name,
  description: product?.description,
  imageSrc: product?.imageSrc,
  price: product?.price
})

/**
 * @name buildSearchQueryObj
 * @description parses a searchQueryString and returns an object with the key, value pairs
 * @param {String} search the search query in the format: "?key1=value1&key2=value2..."
 * @returns searchQueryObject
 */
export const buildSearchQueryObject = (searchQuery) => {
  if (!searchQuery) {
    return {}
  };

  if (!searchQuery.startsWith('?')) {
    return null;
  }

  return Object
    .fromEntries(searchQuery
      .replace('?', '')
      .split("&")
      .map((keyValuePair) => keyValuePair.split("=")))
}

export const buildSearchQuery = (searchQueryObj) => {
  return '?' + Object
    .entries(sortObject(searchQueryObj))
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
}

export const updateSearchQueryKeyValuePair = (query, key, value) => {
  const searchQueryObj = buildSearchQueryObject(query);
  searchQueryObj[key] = value;
  return buildSearchQuery(searchQueryObj)
}

export const filterSearchQueryObjByKeys = (searchQueryObj, keys) => Object
  .fromEntries(
    Object
      .entries(searchQueryObj)
      .filter(([key]) => keys.includes(key))
  )

export const sortObject = (object) => Object.fromEntries(Object.keys(object).sort().map((key) => [key, object[key]]))

export const capitalize = (word) => word.length > 1 && word.substring(0,1).toUpperCase() + word.substring(1)
