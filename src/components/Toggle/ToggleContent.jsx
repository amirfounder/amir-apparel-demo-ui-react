import React from 'react';
import styles from './Toggle.module.scss'

export const ToggleContent = (props) => {
  const {
    children,
    show
  } = props;

  return (
    <div
      className={`
        ${styles.content}
        ${show && styles.show}
      `}
    >
      {children}
    </div>
  )
}