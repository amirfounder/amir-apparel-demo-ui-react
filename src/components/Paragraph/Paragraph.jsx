import React from 'react';
import styles from './Paragraph.module.scss'

export const Paragraph = (props) => {
  const {
    children,
    className
  } = props;

  return (
    <p className={`${styles.main} ${className}`}>
      {children}
    </p>
  )
}