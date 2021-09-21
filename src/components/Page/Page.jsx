import React, { useEffect } from 'react';
import styles from './Page.module.scss';

export const Page = (props) => {
  const {
    children
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}