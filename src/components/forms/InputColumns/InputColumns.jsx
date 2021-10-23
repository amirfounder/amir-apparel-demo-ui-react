import React from 'react';
import styles from './InputColumns.module.scss'

export const InputColumns = (props) => {
  const {
    children,
    columns
  } = props;

  return (
    <div
      style={{gridTemplateColumns: columns}}
      className={styles.main}
    >
      {children}
    </div>
  )
}