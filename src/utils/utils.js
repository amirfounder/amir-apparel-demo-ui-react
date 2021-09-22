export const parseIdFromProductPageNameAndIdParam = (slug) => {
  const slugArr = slug.split('-')
  return slugArr[slugArr.length - 1]
}

export const scrollToTop = () => window.scrollTo(0, 0)