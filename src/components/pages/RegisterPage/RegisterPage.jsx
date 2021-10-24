import React from 'react';
import styles from './RegisterPage.module.scss'
import { Page } from '../../Page';
import { Heading } from '../../Heading';
import { LoginWithGoogle } from '../../LoginWithGoogle';

export const RegisterPage = () => {
  return (
    <Page dataTestId="register-page">
      <div className={styles.main}>
        <div className={styles.box}>
          <Heading>
            Register
          </Heading>
          <div>
            <LoginWithGoogle />
          </div>
        </div>
      </div>
    </Page>
  )
}