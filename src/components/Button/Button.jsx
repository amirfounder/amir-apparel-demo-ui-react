import React from "react";
import styles from './Button.module.scss'

export const Button = (props) => {
  const {
    children,
    dataTestId,
    size,
    type,
    ...other
  } = props;

  const validSizes = ['small', 'medium', 'large'];
  const validTypes = ['primary', 'secondary'];

  return (
    <button
      data-testid={dataTestId || 'button'}
      className={`
        ${styles.main}
        ${validSizes.includes(size) ? styles[size] : styles.small}
        ${validTypes.includes(type) ? styles[type] : styles.primary}
      `}
      {...other}
    >
      {children}
    </button>
  )
}