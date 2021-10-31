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

export const getUserByEmail = async (email, dispatchUser, onSuccess, setApiError) => {
  let userExists = false;
  await sendHttpRequest('GET', `/users/${email}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((data) => {
      dispatchUser({
        type: 'login',
        value: data
      })
      userExists = true;
      onSuccess && onSuccess()
    })
    .catch(setApiError)
  return userExists;
}

export const createUser = async (user, dispatchUser, onSuccess, setApiError) => {
  await sendHttpRequest('POST', `/users`, user)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      dispatchUser({
        type: 'login',
        value: data
      })
      onSuccess && onSuccess()
    })
    .catch(setApiError)
}