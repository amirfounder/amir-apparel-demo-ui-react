import React from "react";
import styles from './Button.module.scss'

export const Button = (props) => {
  const {
    children,
    ...other
  } = props;

  return (
    <button
      className={styles.main}
      {...other}
    >
      {children}
    </button>
  )
}