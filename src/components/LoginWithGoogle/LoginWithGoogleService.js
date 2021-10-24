export const buildUserDTOFromGoogleResponse = (response) => {
  const {
    profileObj
  } = response;

  return {
    email: profileObj.email,
    firstName: profileObj.givenName,
    lastName: profileObj.familyName
  }
}