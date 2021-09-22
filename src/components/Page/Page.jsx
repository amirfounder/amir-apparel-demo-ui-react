import React from 'react';
import styles from './Page.module.scss';

export const Page = React.memo((props) => {
  const {
    children
  } = props;

  return (
    <div className={styles.main}>
      {children}
    </div>
  )
})