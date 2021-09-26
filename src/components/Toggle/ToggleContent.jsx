import React from 'react';
import styles from './Toggle.module.scss'

export const ToggleContent = (props) => {
  const {
    children,
    show,
    className,
    customClass
  } = props;

  return (
    <div
      className={`
        ${styles.content}
        ${show && styles.show}
        ${customClass ? className : styles.padded}
      `}
    >
      {children}
    </div>
  )
}