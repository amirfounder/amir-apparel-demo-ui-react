import React from 'react';
import styles from './ThankYouPage.module.scss'
import { Page } from '../../Page';

export const ThankYouPage = () => {
  return (
    <Page
      dataTestId='thank-you-page'
      className={styles.main}
    >
      Thank you for your puchase!
    </Page>
  )
}