export const setQuantityService = (value, setQuantity) => {
  if (
    value.match(/^[0-9]+$/) ||
    value === ''
  ) {
    setQuantity(Number(value))
  }
}