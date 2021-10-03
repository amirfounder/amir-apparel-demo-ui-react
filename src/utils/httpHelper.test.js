import { waitFor } from "@testing-library/react";
import constants from "./constants";
import { sendHttpRequest } from "./httpHelper";

global.fetch = jest.fn(() => {
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ key: 'value' })
  })
})

test('Call sendHttpHelper with "GET"', async () => {
  const
    expectedRoute = constants.BASE_API_ENDPOINT + '/product',
    expectedConfiguration = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    };
  
  sendHttpRequest('GET', '/product')

  await waitFor(() => {
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(expectedRoute, expectedConfiguration)
    expect(fetch).not.toHaveBeenCalledWith('param1', 'param2')
  })
})