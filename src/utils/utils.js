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

export const parseSearchQuery = (search) => {
  const queryParams = search.substring(1).split("&");
  const queryParamObject = {}
  queryParams.forEach((queryParam) => {
    const [name, value] = queryParam.split("=")
    queryParamObject[name] = value
  })
  return queryParamObject;
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