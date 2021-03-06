import constants from "./constants"

export const sendHttpRequest = async (method, route, payload) => {
  const base = constants.LOCALHOST_API_ENDPOINT
  // const base = constants.HEROKU_SPRING_BOOT_API_ENDPOINT

  return await fetch(base + route, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify(payload)
  })
}