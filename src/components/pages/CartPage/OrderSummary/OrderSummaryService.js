export const calculateCartTotal = (cart) => {
  return Array.isArray(cart) && Number(cart.reduce((acc, ele) => acc += (ele.price * (ele.quantity || 1)), 0)).toFixed(2)
}