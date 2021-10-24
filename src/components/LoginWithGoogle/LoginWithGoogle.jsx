import React from 'react';
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router';
import { useUserContext } from '../../context/UserContext/UserContext';
import constants from '../../utils/constants';
import { buildUserDTOFromGoogleResponse } from './LoginWithGoogleService';

export const LoginWithGoogle = () => {
  const history = useHistory();
  const {
    state, dispatchUser
  } = useUserContext()

  /**
   * Handles a successful google login response
   * @param {Object} response Google response
   */
  const handleLoginSuccess = (response) => {
    history.goBack();
    dispatchUser({ type: 'set', value: {
      email: response.profileObj.email
    }})
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