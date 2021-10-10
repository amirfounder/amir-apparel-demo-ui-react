import { waitFor } from "@testing-library/react";
import { getProductById } from "./ProductPageService";
import { sendHttpRequest } from "../../../utils/httpHelper"


jest.mock('../../../utils/httpHelper')

const mockSetProduct = jest.fn();
const mockSetApiError = jest.fn();

describe('get product by id', () => {
  
  test('ok response, valid body', async () => {
    const mockResponse = new Response();
    sendHttpRequest.mockResolvedValue(mockResponse);

    mockResponse.ok = true;
    mockResponse.json = () => Promise.resolve({ key: 'value' })
    
    await waitFor(() => {
      getProductById(1, mockSetProduct, mockSetApiError);
    })

    expect(mockSetProduct).toHaveBeenCalledTimes(1);
    expect(mockSetProduct).toHaveBeenCalledWith({ key: 'value' })
    expect(mockSetProduct).not.toHaveBeenCalledWith({ key: 'notThisValue' })
  })

  test('ok response, failed to parse', async () => {
    const mockResponse = new Response();
    sendHttpRequest.mockResolvedValue(mockResponse);

    mockResponse.ok = true;
    mockResponse.json = () => Promise.reject(null)
    
    await waitFor(() => {
      getProductById(1, mockSetProduct, mockSetApiError);
    })

    expect(mockSetApiError).toHaveBeenCalledTimes(1);
  })

  test('bad response', async () => {
    const mockResponse = new Response();
    sendHttpRequest.mockResolvedValue(mockResponse);

    mockResponse.ok = false;
    
    await waitFor(() => {
      getProductById(1, mockSetProduct, mockSetApiError);
    })

    expect(mockSetApiError).toHaveBeenCalledTimes(1);
    expect(mockSetApiError).toHaveBeenCalledWith(new Error("Response status not OK"));
  })

})