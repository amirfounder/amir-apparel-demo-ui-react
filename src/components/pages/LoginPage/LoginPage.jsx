import React from 'react';
import styles from './LoginPage.module.scss'
import { Page } from '../../Page';
import { Heading } from '../../Heading';
import { LoginWithGoogle } from '../../LoginWithGoogle';
import { useUserContext } from '../../../context/UserContext/UserContext';
import { useHistory } from 'react-router';

export const LoginPage = () => {
  const {
    state: { isLoggedIn }
  } = useUserContext();
  const history = useHistory();
  
  const handleGoogleLoginSuccess = () => {
    history.push('/profile')
  };

  return (
    <Page dataTestId="login-page">
      <div className={styles.main}>
        <div className={styles.box}>
          <Heading>
            Login
          </Heading>
          <div>
            {isLoggedIn
              ? 'You are already logged in'
              : <LoginWithGoogle onSuccess={handleGoogleLoginSuccess} />
            }
          </div>
        </div>
      </div>
    </Page>
  )
}