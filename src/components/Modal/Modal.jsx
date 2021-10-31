import React from 'react';
import styles from './Modal.module.scss'

export const Modal = (props) => {
  const {
    children,
    show
  } = props;

  return (
    <div
      style={{display: show ? 'inherit' : 'none'}}
      className={styles.overlay}
    >
      <div className={styles.main}>
        {children}
      </div>
    </div>
  )
}