import React from "react";
import styles from './Button.module.scss'

export const Button = (props) => {
  const {
    children,
    size,
    type,
    ...other
  } = props;

  return (
    <button
      className={`
        ${styles.main}
        ${styles[size] || styles.small}
        ${styles[type] || styles.primary}
      `}
      {...other}
    >
      {children}
    </button>
  )
}