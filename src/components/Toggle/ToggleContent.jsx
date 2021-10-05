import React from 'react';
import styles from './Toggle.module.scss'

export const ToggleContent = (props) => {
  const {
    children,
    show,
    className,
    dataTestId
  } = props;

  return (
    <div
      data-testid={dataTestId || 'toggle-content'}
      className={`
        ${styles.content}
        ${show && styles.show}
        ${className || styles.padding}
      `}
    >
      {children}
    </div>
  )
}