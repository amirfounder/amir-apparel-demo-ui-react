import React from 'react';
import styles from './SortByDropdown.module.scss';

export const SortByDropdownOption = (props) => {
  const {
    setSelectValue,
    value,
    children,
    onClick
  } = props;

  const handleOptionClick = () => {
    setSelectValue(value);
    if (onClick) {
      onClick();
    }
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