export const generateCartBadgeNumber = (cart) => {
  if (Array.isArray(cart)) {
    if (cart.length > 99) {
      return '99+'
    }
    return String(cart.length)
  }
  return '0'
}