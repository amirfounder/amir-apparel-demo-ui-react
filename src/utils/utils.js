export const parseIdFromProductPageNameAndIdParam = (slug) => {
  const slugArr = slug.split('-')
  return slugArr[slugArr.length - 1]
}

export const scrollToTop = () => window.scrollTo(0, 0)

export const getDeepCopy = (object) => JSON.parse(JSON.stringify(object));

export const createCartProductDTO = (product) => {
  return {
    id: product?.id,
    name: product?.name,
    description: product?.description,
    imageSrc: product?.imageSrc
  }
}