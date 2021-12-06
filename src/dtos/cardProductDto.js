export const buildCartProductDTO = (product) => ({
  id: product?.id,
  name: product?.name,
  description: product?.description,
  imageSrc: product?.imageSrc,
  price: product?.price
})