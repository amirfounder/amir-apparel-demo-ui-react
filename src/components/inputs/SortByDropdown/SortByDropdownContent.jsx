import React from 'react';
import styles from './SortByDropdown.module.scss'
import { SortByDropdownOption } from './SortByDropdownOption';

export const SortByDropdownContent = (props) => {
  const {
    options,
    toggleDropdown,
    setValue,
    show
  } = props;

  const handleOptionClick = (e) => {
    toggleDropdown();
    setValue(e.target.value)
  }

  return (
    <div hidden={!show}>
      <div className={styles.dropdown}>
        {Array.isArray(options) && options.map((option) => {
          const { display, value } = option;
          return (
            <SortByDropdownOption
              value={value}
              onClick={handleOptionClick}
              className={styles.option}
            >
              {display}
            </SortByDropdownOption>
          )
        })}
      </div>
    </div>
  )
}