import { buildSearchQuery, buildSearchQueryObject } from "./utils";

describe('Build Search Query', () => {

  test('valid key value pair', () => {
    const testObject = { key: 'value' }
    const
      expected = '?key=value',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected);
  })

  test('multiple valid key value pairs', () => {
    const testObject = { key: 'value', key2: 'value2' }
    const
      expected = '?key=value&key2=value2',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('null values', () => {
    const testObject = { key: null }
    const
      expected = '?',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('undefinied values', () => {
    const testObject = { key: undefined }
    const
      expected = '?',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('0 as value', () => {
    const testObject = { key: 0 }
    const
      expected = '?',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('0 as string value', () => {
    const testObject = { key: '0' }
    const
      expected = '?key=0',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('false as value', () => {
    const testObject = { key: false }
    const
      expected = '?',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('false as string value', () => {
    const testObject = { key: 'false' }
    const
      expected = '?key=false',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

})

describe('Build Search Query Object', () => {

  test('empty string', () => {
    const searchQuery = ''
    const actual = buildSearchQueryObject(searchQuery)
    const expected = {}
    expect(actual).toBe(expected)
  })

  test('null', () => {
    const
      searchQuery = null,
      actual = buildSearchQueryObject(searchQuery)
      expected = {}
    
    expected(actual).toBe(expected)
  })
})