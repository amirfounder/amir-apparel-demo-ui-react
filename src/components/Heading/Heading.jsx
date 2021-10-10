import React from 'react';
import styles from './Heading.module.scss';

export const Heading = (props) => {
  const {
    level,
    children,
    className,
    ...other
  } = props;

  return (
    <>
      {
        level === 1 ? <h1 data-testid='heading-1' {...other} className={`${styles.main} ${className}`}>{children}</h1> :
        level === 2 ? <h2 data-testid='heading-2' {...other} className={`${styles.main} ${className}`}>{children}</h2> :
        level === 3 ? <h3 data-testid='heading-3' {...other} className={`${styles.main} ${className}`}>{children}</h3> :
        level === 4 ? <h4 data-testid='heading-4' {...other} className={`${styles.main} ${className}`}>{children}</h4> :
        level === 5 ? <h5 data-testid='heading-5' {...other} className={`${styles.main} ${className}`}>{children}</h5> :
        level === 6 ? <h6 data-testid='heading-6' {...other} className={`${styles.main} ${className}`}>{children}</h6> :
        <h2 data-testid='heading-2' {...other} className={`${styles.main} ${className}`}>{children}</h2>
      }
    </>
  )
}