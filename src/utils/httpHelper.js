import constants from "./constants"

export const sendHttpRequest = async (method, route, payload) => {
  return await fetch(constants.BASE_API_ENDPOINT + route, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify(payload)
  })
}