import React from 'react';
import styles from './Badge.module.scss'

export const Badge = (props) => {
  const {
    children
  } = props;

  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}