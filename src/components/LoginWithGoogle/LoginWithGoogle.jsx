import React from 'react';
import GoogleLogin from 'react-google-login'
import { useUserContext } from '../../context/UserContext/UserContext';
import constants from '../../utils/constants';
import { buildUserDTOFromGoogleResponse, createUser, getUserByEmail } from './LoginWithGoogleService';

export const LoginWithGoogle = (props) => {
  const {
    onSuccess
  } = props;

  const {
    dispatchUser
  } = useUserContext()

  /**
   * Handles a successful google login response
   * @param {Object} response Google response
   */
  const handleLoginSuccess = async (response) => {
    sessionStorage.setItem('token', response.tokenObj.id_token)

    const userExists = await getUserByEmail(
      response.profileObj.email,
      dispatchUser,
      onSuccess
    );

    if (!userExists) {
      const user = buildUserDTOFromGoogleResponse(response);
      createUser(
        user,
        dispatchUser,
        onSuccess
      )
    }
  }
  
  return (
    <GoogleLogin
      clientId={constants.GOOGLE_CLIENT_ID}
      cookiePolicy='single_host_origin'
      onSuccess={handleLoginSuccess}
      onFailure={console.error}
    >
      Login with Google
    </GoogleLogin>
  )
}