import { generatePaginationButtonValues } from "./PaginationService";

test('current: 2, totalPages: 4', () => {
  const expected = [1, 2, 3, 4];
  const actual = generatePaginationButtonValues(2, 4)
  expect(actual).toStrictEqual(expected)
})

test('current: 5, totalPages: 8', () => {
  const expected = [1, '...', 4, 5, 6, 7, 8]
  const actual = generatePaginationButtonValues(5, 8)
  expect(actual).toStrictEqual(expected)
})

test('current: 4, totalPages: 8', () => {
  const expected = [1, 2, 3, 4, 5, '...', 8]
  const actual = generatePaginationButtonValues(4, 8)
  expect(actual).toStrictEqual(expected)
})

test('current: 8, totalPages: 12', () => {
  const expected = [1, '...', 7, 8, 9, '...', 12]
  const actual = generatePaginationButtonValues(8, 12)
  expect(actual).toStrictEqual(expected)
})