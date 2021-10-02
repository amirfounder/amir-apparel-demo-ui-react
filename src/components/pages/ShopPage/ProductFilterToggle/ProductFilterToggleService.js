import { sendHttpRequest } from "../../../../utils/httpHelper"

export const getUniqueAttributes = (attributeName, setValues) => {
  sendHttpRequest('GET', `/attribute/${attributeName}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((body) => {
      setValues(body)
    })
}