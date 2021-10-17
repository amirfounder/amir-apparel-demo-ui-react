import {
  buildCartProductDTO,
  buildSearchQuery,
  buildSearchQueryObject,
  capitalize,
  filterSearchQueryObjByKeys,
  getDeepCopy,
  parseIdFromProductPageNameAndIdParam,
  scrollToTop,
  updateSearchQueryKeyValuePair
} from "./utils";

describe('Build Search Query', () => {

  test('valid key value pair', () => {
    const
      testObject = { key: 'value' },
      expected = '?key=value',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected);
  })

  test('multiple valid key value pairs', () => {
    const
      testObject = { key: 'value', key2: 'value2' },
      expected = '?key=value&key2=value2',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('null values', () => {
    const
      testObject = { key: null },
      expected = '?',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('undefinied values', () => {
    const
      testObject = { key: undefined },
      expected = '?',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('0 as value', () => {
    const
      testObject = { key: 0 },
      expected = '?',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('0 as string value', () => {
    const
      testObject = { key: '0' },
      expected = '?key=0',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('false as value', () => {
    const
      testObject = { key: false },
      expected = '?',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

  test('false as string value', () => {
    const
      testObject = { key: 'false' },
      expected = '?key=false',
      actual = buildSearchQuery(testObject);
    expect(actual).toBe(expected)
  })

})

describe('Build Search Query Object', () => {

  test('empty string', () => {
    const
      searchQuery = '',
      actual = buildSearchQueryObject(searchQuery),
      expected = {}
    expect(actual).toStrictEqual(expected)
  })

  test('null', () => {
    const
      searchQuery = null,
      actual = buildSearchQueryObject(searchQuery),
      expected = {}
    
    expect(actual).toStrictEqual(expected)
  })

  test('?key=value', () => {
    const
      searchQuery = '?key=value',
      actual = buildSearchQueryObject(searchQuery),
      expected = { key: 'value' };
    
    expect(actual).toStrictEqual(expected)
  })

  test('?key=false', () => {
    const
      searchQuery = '?key=false',
      actual = buildSearchQueryObject(searchQuery),
      expected = { key: 'false' };
    
    expect(actual).toStrictEqual(expected);
  })

  test('key=value', () => {
    const
      searchQuery = 'key=value',
      actual = buildSearchQueryObject(searchQuery);
    
    expect(actual).toEqual(null);
  })

})

describe('Parse Id From Product Page Name And Id Param', () => {
  test('standard happy path', () => {
    const
      url = 'http://localhost:8080/p/cotton-shorts-1',
      actual = parseIdFromProductPageNameAndIdParam(url),
      expected = '1';
    expect(actual).toBe(expected)
  })

  test('no product base slug', () => {
    const
      expected = null,
      url = 'http://localhost:8080/cotton-shorts-1',
      actual = parseIdFromProductPageNameAndIdParam(url);
    
    expect(actual).toBe(expected);
  })
})

describe('Build Cart Product DTO', () => {
  test('product with more fields', () => {
    const
      product = {
        id: 1,
        name: 'name',
        description: 'description',
        imageSrc: 'imageSrc',
        price: 'price',
        key: 'value',
        unkownValue: 'unkown'
      },
      actual = buildCartProductDTO(product),
      expected = {
        id: 1,
        name: 'name',
        description: 'description',
        imageSrc: 'imageSrc',
        price: 'price'
      };
    expect(actual).toStrictEqual(expected)
  })

  test('product with no fields', () => {
    const
      product = {},
      actual = buildCartProductDTO(product),
      expected = {
        id: undefined,
        name: undefined,
        description: undefined,
        imageSrc: undefined,
        price: undefined
      }
    expect(actual).toStrictEqual(expected);
  })

  test('product with false fields', () => {
    const 
      product = {
        id: 0,
        name: false,
        description: null,
        imageSrc: undefined
      },
      actual = buildCartProductDTO(product),
      expected = {
        id: 0,
        name: false,
        description: null,
        imageSrc: undefined,
        price: undefined
      };
    expect(actual).toStrictEqual(expected);
  })
})

describe('Scroll to Top', () => {
  test('scrolls to 0,0', () => {
    global.window.scrollTo = jest.fn((x, y) => (x, y))
    scrollToTop()
    expect(global.window.scrollTo).toHaveBeenCalledWith(0, 0);
  })
})

describe('Get Deep Copy', () => {
  const
    obj = {key: 'value'},
    copy = getDeepCopy(obj)
  
  expect(obj).not.toBe(copy);
  expect(obj).toEqual(copy);
})

describe('Update Search Query Key Value Pair', () => {
  test('simple happy path', () => {
    const
      searchQuery = '?key=value',
      expected = '?key=newValue',
      actual = updateSearchQueryKeyValuePair(searchQuery, 'key', 'newValue');
    
    expect(actual).toEqual(expected);
  })
})

describe('Filter Search Query Object By Keys', () => {
  test('valid keys', () => {
    const
      searchQueryObject = {
        key: 'value',
        key2: 'value2'
      },
      actual = filterSearchQueryObjByKeys(searchQueryObject, ['key2']),
      expected = { key2: 'value2' }
    
    expect(actual).toEqual(expected);
  })
  
  test('invalid key', () => {
    const
      searchQueryObject = {
        key: 'value',
        key2: 'value2'
      },
      actual = filterSearchQueryObjByKeys(searchQueryObject, ['key3']),
      expected = {};
    
    expect(actual).toStrictEqual(expected);
  })
})

describe('Capitalize', () => {
  test('valid string', () => {
    const
      word = 'hello',
      actual = capitalize(word),
      expected = 'Hello';
    
    expect(actual).toEqual(expected)
  })
})