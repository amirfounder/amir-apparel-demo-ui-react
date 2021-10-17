import { calculateCartTotal } from "./OrderSummaryService"

describe('calculate total price of cart', () => {
  test('no quantity', () => {
    const
      products = [
        { price: 8.00 },
        { price: 4.00 }
      ],
      expected = Number(12).toFixed(2),
      actual = calculateCartTotal(products);
  
    expect(actual).toEqual(expected);
  })
})