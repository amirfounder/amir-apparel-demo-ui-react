import React from 'react';
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router';
import { useUserContext } from '../../context/UserContext/UserContext';
import constants from '../../utils/constants';
import { buildUserDTOFromGoogleResponse, createUser, getUserByEmail } from './LoginWithGoogleService';

export const LoginWithGoogle = () => {
  const history = useHistory();
  const {
    dispatchUser
  } = useUserContext()

  const onCreateUserSuccess = () => {
    history.goBack()
  };

  const onGetByEmailSuccess = () => {
    history.goBack()
  }

  /**
   * Handles a successful google login response
   * @param {Object} response Google response
   */
  const handleLoginSuccess = async (response) => {
    sessionStorage.setItem('token', response.tokenObj.id_token)

    const userExists = await getUserByEmail(
      response.profileObj.email,
      dispatchUser,
      onGetByEmailSuccess
    );

    if (!userExists) {
      const user = buildUserDTOFromGoogleResponse(response);
      createUser(
        user,
        dispatchUser,
        onCreateUserSuccess
      )
    }
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