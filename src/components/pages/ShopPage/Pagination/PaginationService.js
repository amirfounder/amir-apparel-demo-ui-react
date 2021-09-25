const generateConsecutiveArray = (length, startValue) => {
  return Array(length).fill().map((_, index) => index + startValue)
}

export const generatePaginationButtonValues = (currentPage, totalPages) => {
  if (totalPages > 0) {
    if (totalPages > 7) {
      if (currentPage <= 4) {
        return [...generateConsecutiveArray(5, 1), '...', totalPages]
      } else if (totalPages - currentPage <= 3) {
        return [1, '...', ...generateConsecutiveArray(5, totalPages - 4)]
      }
      return [1, '...', ...generateConsecutiveArray(3, currentPage - 1), '...', totalPages]
    }
    return generateConsecutiveArray(totalPages, 1)
  }
  return null
}