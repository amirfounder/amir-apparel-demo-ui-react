export const parseIdFromProductPageNameAndIdParam = (slug) => {
  const slugArr = slug.split('-')
  return slugArr[slugArr.length - 1]
}