import React from 'react';
import styles from './Modal.module.scss'

export const Modal = (props) => {
  const {
    children
  } = props;

  return (
    <div className={styles.overlay}>
      <div className={styles.main}>
        {children}
      </div>
    </div>
  )
}