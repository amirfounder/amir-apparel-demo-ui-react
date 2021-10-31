import React from 'react';
import styles from './RegisterPage.module.scss'
import { Page } from '../../Page';
import { Heading } from '../../Heading';
import { LoginWithGoogle } from '../../LoginWithGoogle';
import { useUserContext } from '../../../context/UserContext/UserContext';

export const RegisterPage = () => {
  const {
    state: {
      isLoggedIn
    }
  } = useUserContext();

  return (
    <Page dataTestId="register-page">
      <div className={styles.main}>
        <div className={styles.box}>
          <Heading>
            Register
          </Heading>
          <div>
            {isLoggedIn
              ? 'You are already logged in'
              : <LoginWithGoogle />
            }
          </div>
        </div>
      </div>
    </Page>
  )
}