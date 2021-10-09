import {
  buildNewAttributeOptionsBasedOnSearchQuery,
  buildSetFilterOptionsWithNewAttributeOptionsFnFn,
  buildShopPageSearchQuery,
  getProducts,
  getFilterOptionsByAttribute
} from './ShopPageService'
import { sendHttpRequest } from "../../../utils/httpHelper"
import { waitFor } from '@testing-library/react'
import constants from '../../../utils/constants'


jest.mock('../../../utils/httpHelper', () => ({
  sendHttpRequest: jest.fn()
}))

describe('build shop page search query', () => {

  test('valid', () => {
    const
      value = '?page=1&size=12&demographic=men',
      expected = '?demographic=men&page=1&size=12',
      actual = buildShopPageSearchQuery(value)
    
    expect(actual).toEqual(expected)
  })
  test('no page prop', () => {
    const
      value = '?size=12',
      expected = '?size=12',
      actual = buildShopPageSearchQuery(value)
    
    expect(actual).toEqual(expected)
  })
  test('no size prop', () => {
    const
      value = '?page=1',
      expected = '?page=1&size=12',
      actual = buildShopPageSearchQuery(value)
    
    expect(actual).toEqual(expected)
  })

})

describe('modify Filter Options Based On Search Query', () => {
  test('search query is there', () => {
    const
      attributeOptions = { men: false, women: false },
      searchQuery = '?demographic=men,women',
      attribute = 'demographic',
      expected = { men: true, women: true },
      actual = buildNewAttributeOptionsBasedOnSearchQuery(attributeOptions, attribute, searchQuery)

    expect(actual).toEqual(expected)
  })

  test('no search query params', () => {
    const
      attributeOptions = { men: false, women: false },
      searchQuery = '',
      attribute = 'demographic',
      expected = { men: false, women: false },
      actual = buildNewAttributeOptionsBasedOnSearchQuery(attributeOptions, attribute, searchQuery)

    expect(actual).toEqual(expected)
  })

  test('attribute does not exists', () => {
    const
      attributeOptions = { men: false, women: false },
      searchQuery = '',
      attribute = 'blue',
      expected = { men: false, women: false },
      actual = buildNewAttributeOptionsBasedOnSearchQuery(attributeOptions, attribute, searchQuery)

    expect(actual).toEqual(expected)
  })

  test('search query value not exist', () => {
    const
      attributeOptions = { men: false, women: false },
      searchQuery = '?demographic=blue',
      attribute = 'demographic',
      expected = { men: false, women: false },
      actual = buildNewAttributeOptionsBasedOnSearchQuery(attributeOptions, attribute, searchQuery)

    expect(actual).toEqual(expected)
  })
})

describe('build Set Filter Options With New Attribute Options Fn Fn', () => {
  const mockDispatcher = jest.fn();
  const mockAttribute = 'demographic'
  const mockValue = 'men'
  test('test', () => {
    const buildSetFilterOptionsWithNewAttributeOptionsFn =
      buildSetFilterOptionsWithNewAttributeOptionsFnFn(mockDispatcher);
    const setFilterOptionsWithNewAttributeOptions = 
      buildSetFilterOptionsWithNewAttributeOptionsFn(mockAttribute);
    setFilterOptionsWithNewAttributeOptions(mockValue)

    expect(mockDispatcher).toHaveBeenCalledWith({
      attribute: mockAttribute,
      value: mockValue,
      type: 'init'
    })
  })
})

describe('getProducts', () => {

  const
    mockSearchQuery = '?test=true',
    mockSetProducts = jest.fn(),
    mockSetCurrentPage = jest.fn(),
    mockSetTotalPages = jest.fn(),
    mockSetApiError = jest.fn();

  test('ok status', async () => {
    const mockResponseBody = {
      content: [{id: 1, name: 'product'}],
      totalPages: 20,
      number: 1
    }

    const mockResponse = new Response();

    mockResponse.ok = true;
    mockResponse.json = () => Promise.resolve(mockResponseBody)
    
    sendHttpRequest.mockResolvedValue(mockResponse);
  
    getProducts(mockSearchQuery, mockSetProducts, mockSetCurrentPage, mockSetTotalPages, mockSetApiError);
    
    await waitFor(() => {
      expect(sendHttpRequest).toHaveBeenCalledTimes(1);
      expect(sendHttpRequest).toHaveBeenCalledWith('GET', constants.PRODUCTS_ENDPOINT + '/filter' + mockSearchQuery)
      expect(mockSetProducts).toHaveBeenCalledTimes(1);
      expect(mockSetProducts).toHaveBeenCalledWith([{id: 1, name: 'product'}])
      expect(mockSetTotalPages).toHaveBeenCalledTimes(1)
      expect(mockSetTotalPages).toHaveBeenCalledWith(20);
      expect(mockSetCurrentPage).toHaveBeenCalledTimes(1);
      expect(mockSetCurrentPage).toHaveBeenCalledWith(2);
      expect(mockSetApiError).toHaveBeenCalledTimes(1);
      expect(mockSetApiError).toHaveBeenCalledWith('');
    })
  })

  test('not ok status', async () => {
    const mockResponse = new Response();

    mockResponse.ok = false;
    mockResponse.status = 404
    
    sendHttpRequest.mockResolvedValue(mockResponse);
  
    getProducts(mockSearchQuery, mockSetProducts, mockSetCurrentPage, mockSetTotalPages, mockSetApiError);
    
    await waitFor(() => {
      expect(mockSetApiError).toHaveBeenCalledTimes(1);
      expect(mockSetApiError).toHaveBeenCalledWith(new Error('Response status was 404'));
    })
  })

  test('ok status, no resposne body', async () => {
    const mockResponse = new Response();

    mockResponse.ok = true,
    mockResponse.status = 200

    sendHttpRequest.mockResolvedValue(mockResponse);

    getProducts(mockSearchQuery, mockSetProducts, mockSetCurrentPage, mockSetTotalPages, mockSetApiError);

    await waitFor(() => {
      expect(mockSetApiError).toHaveBeenCalledTimes(1);
      expect(mockSetApiError).toHaveBeenCalledWith(new SyntaxError('Unexpected end of JSON input'))
    })
  })

})

describe('getFilterOptionsByAttribute', () => {

  const
    mockAttribute = 'demographic',
    mockSearchQuery = '?test=true',
    mocksetFilterOptionswithNewAttributeOptions = jest.fn(),
    mockSetApiError = jest.fn();

  test('ok status', async () => {

    const mockResponseBody = [
      'Men',
      'Women',
      'Kids'
    ]

    const mockResponse = new Response();

    mockResponse.ok = true;
    mockResponse.json = () => Promise.resolve(mockResponseBody)

    sendHttpRequest.mockResolvedValue(mockResponse)

    getFilterOptionsByAttribute(mockAttribute, mockSearchQuery, mocksetFilterOptionswithNewAttributeOptions, mockSetApiError)

    await waitFor(() => {
      expect(mocksetFilterOptionswithNewAttributeOptions).toHaveBeenCalledTimes(1);
      expect(mockSetApiError).toHaveBeenCalledTimes(1);
      expect(mockSetApiError).toHaveBeenCalledWith('');
    })
  })

  test('ok status, body not an array', async () => {

    const mockResponseBody = null
    const mockResponse = new Response();

    mockResponse.ok = true;
    mockResponse.json = () => Promise.resolve(mockResponseBody)

    sendHttpRequest.mockResolvedValue(mockResponse)

    getFilterOptionsByAttribute(mockAttribute, mockSearchQuery, mocksetFilterOptionswithNewAttributeOptions, mockSetApiError)

    await waitFor(() => {
      expect(mocksetFilterOptionswithNewAttributeOptions).toHaveBeenCalledTimes(0);
      expect(mockSetApiError).toHaveBeenCalledTimes(0);
    })
  })

  test('not ok status', async () => {

    const mockResponse = new Response();

    mockResponse.ok = false;
    mockResponse.status = 400

    sendHttpRequest.mockResolvedValue(mockResponse)

    getFilterOptionsByAttribute(mockAttribute, mockSearchQuery, mocksetFilterOptionswithNewAttributeOptions, mockSetApiError)

    await waitFor(() => {
      expect(mocksetFilterOptionswithNewAttributeOptions).toHaveBeenCalledTimes(0);
      expect(mockSetApiError).toHaveBeenCalledTimes(1);
      expect(mockSetApiError).toHaveBeenCalledWith(new Error('Response status was 400'));
    })
  })
})