import React from 'react';
import styles from './Paragraph.module.scss'

export const Paragraph = (props) => {
  const {
    children,
    className,
    dataTestId
  } = props;

  return (
    <p
      data-testid={dataTestId || 'paragraph'}
      className={`
        ${styles.main}
        ${className}
      `}
      >
      {children}
    </p>
  )
}