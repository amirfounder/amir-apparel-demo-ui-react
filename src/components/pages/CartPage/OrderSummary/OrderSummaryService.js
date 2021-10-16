export const calculateTotalPrice = (cart) => {
  return Array.isArray(cart) && cart.reduce((acc, ele) => acc += (ele.price * ele.quantity), 0)
}