import { sendHttpRequest } from "../../utils/httpHelper";

export const buildUserDTOFromGoogleResponse = (response) => {
  const {
    profileObj: {
      email,
      givenName: firstName,
      familyName: lastName
    }
  } = response;
  
  return {
    email,
    firstName,
    lastName
  }
}

export const getUserByEmail = async (email, dispatchUser, setApiError) => {
  let user = null;
  await sendHttpRequest('GET', `/users/${email}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((data) => {
      dispatchUser({ type: 'set', value: data })
      user = data;
    })
    .catch(setApiError)
  return user;
}

export const createUser = async (user, dispatchUser, setApiError) => {
  await sendHttpRequest('POST', `/users`, user)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      dispatchUser({
        type: 'set',
        value: data
      })
    })
    .catch(setApiError)
}