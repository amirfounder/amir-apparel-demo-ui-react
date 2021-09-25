const consecutiveArray = (length, start) => Array(length).fill().map((_, index) => index + start)

export const generatePaginationButtonValues = (currentPage, totalPages) => {
  const buttonCount = 5
  const buttonCountOnEachSide = Math.floor(buttonCount / 2)
  if (totalPages > 0) {
    if (totalPages > buttonCount) {
      if (currentPage + buttonCountOnEachSide >= totalPages) {
        return consecutiveArray(buttonCount, totalPages - (buttonCount - 1))
      } else if (currentPage - buttonCountOnEachSide > 0) {
        return consecutiveArray(buttonCount, currentPage - buttonCountOnEachSide)
      }
      return consecutiveArray(buttonCount, 1)
    }
    return consecutiveArray(totalPages, 1)
  }
  return null;
}

export const generatePaginationButtonValuesWithElipses = (currentPage, totalPages) => {
  if (totalPages > 0) {
    if (totalPages > 7) {
      if (currentPage <= 4) {
        return [...consecutiveArray(5, 1), '...', totalPages]
      } else if (totalPages - currentPage <= 3) {
        return [1, '...', ...consecutiveArray(5, totalPages - 4)]
      }
      return [1, '...', ...consecutiveArray(3, currentPage - 1), '...', totalPages]
    }
    return consecutiveArray(totalPages, 1)
  }
  return null
}
