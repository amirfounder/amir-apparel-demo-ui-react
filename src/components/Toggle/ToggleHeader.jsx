import React from 'react';
import styles from './Toggle.module.scss'

export const ToggleHeader = (props) => {
  const {
    children,
    setShow
  } = props;

  const handleHeaderClick = () => setShow((prevState) => !prevState);

  return (
    <div
      className={styles.header}
      onClick={handleHeaderClick}
    >
      {children}
    </div>
  )
}