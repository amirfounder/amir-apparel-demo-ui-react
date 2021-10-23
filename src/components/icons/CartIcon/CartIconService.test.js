import { generateCartBadgeNumber } from "./CartIconService";

test('object passed', () => {
  const
    expected = '0',
    actual = generateCartBadgeNumber({});
  
  expect(actual).toEqual(expected)
})

test('null passed', () => {
  const
    expected = '0',
    actual = generateCartBadgeNumber(null);
  
  expect(actual).toEqual(expected);
})

test('Array with length 10 passed', () => {
  const
    expected = '10',
    actual = generateCartBadgeNumber(Array(10));
  
  expect(actual).toEqual(expected);
})

test('Array with length 10000 passed', () => {
  const
    expected = '99+',
    actual = generateCartBadgeNumber(Array(10000));
  
  expect(actual).toEqual(expected);
})