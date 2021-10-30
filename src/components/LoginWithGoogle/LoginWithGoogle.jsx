import React from 'react';
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router';
import { useUserContext } from '../../context/UserContext/UserContext';
import constants from '../../utils/constants';
import { buildUserDTOFromGoogleResponse, createUser, getUserByEmail } from './LoginWithGoogleService';

export const LoginWithGoogle = () => {
  const history = useHistory();
  const {
    state, dispatchUser
  } = useUserContext()

  /**
   * Handles a successful google login response
   * @param {Object} response Google response
   */
  const handleLoginSuccess = async (response) => {
    sessionStorage.setItem('token', response.tokenObj.id_token)

    const dbUser = await getUserByEmail(
      response.profileObj.email,
      dispatchUser
    );

    if (!dbUser) {
      const user = buildUserDTOFromGoogleResponse(response);
      createUser(
        user,
        dispatchUser
      )
    }
    // history.goBack();
  }
  
  return (
    <GoogleLogin
      clientId={constants.GOOGLE_CLIENT_ID}
      cookiePolicy='single_host_origin'
      onSuccess={handleLoginSuccess}
    >
      Login with Google
    </GoogleLogin>
  )
}