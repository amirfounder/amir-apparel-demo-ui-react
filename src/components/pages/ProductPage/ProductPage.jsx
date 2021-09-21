import React, { useEffect } from 'react';
import { Page } from '../../Page';
import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  return (
    <Page>
      <div className={styles.main}>
        <div className={styles.column}>
          Images array goes here
        </div>
        <div className={styles.column}>
          Product information goes here
        </div>
      </div>
    </Page>
  )
}