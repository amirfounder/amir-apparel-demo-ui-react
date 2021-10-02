import React from 'react';
import styles from './Toggle.module.scss'

export const ToggleContent = (props) => {
  const {
    children,
    show,
    className,
  } = props;

  return (
    <div
      className={`
        ${styles.content}
        ${show && styles.show}
        ${className ? className : styles.padding}
      `}
    >
      {children}
    </div>
  )
}