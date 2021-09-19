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
        level === 1 ? <h1 {...other} className={className || styles.main}>{children}</h1> :
        level === 2 ? <h2 {...other} className={className || styles.main}>{children}</h2> :
        level === 3 ? <h3 {...other} className={className || styles.main}>{children}</h3> :
        level === 4 ? <h4 {...other} className={className || styles.main}>{children}</h4> :
        level === 5 ? <h5 {...other} className={className || styles.main}>{children}</h5> :
        level === 6 ? <h6 {...other} className={className || styles.main}>{children}</h6> :
        <h2 {...other} className={className || styles.main}>{children}</h2>
      }
    </>
  )
}