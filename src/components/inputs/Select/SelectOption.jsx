import React from 'react';
import styles from './Select.module.scss';

export const SelectOption = (props) => {
  const {
    setSelectValue,
    value,
    children
  } = props;

  const handleOptionClick = () => {
    setSelectValue(value);
  }

  return (
    <div
      onClick={handleOptionClick}
      className={styles.option}
    >
      {children}
    </div>
  )
}