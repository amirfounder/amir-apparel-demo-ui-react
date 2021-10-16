import { calculateTotalPrice } from "./OrderSummaryService"

test('calculate total price of cart', () => {
  const
    products = [
      {price: 8.00},
      {price: 4.00}
    ],
    expected = 12.00,
    actual = calculateTotalPrice(products);
    
  expect(actual).toEqual(expected);
})