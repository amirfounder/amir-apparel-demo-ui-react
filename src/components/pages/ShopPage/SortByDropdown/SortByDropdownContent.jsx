import React from 'react';
import styles from './SortByDropdown.module.scss'
import { SortByDropdownOption } from './SortByDropdownOption';

export const SortByDropdownContent = (props) => {
  const {
    options,
    setValue,
    setDisplay,
    show
  } = props;

  return (
    <div hidden={!show}>
      <div className={styles.dropdown}>
        {Array.isArray(options) && options.map((option) => {
          const { display, value } = option;
          return (
            <SortByDropdownOption
              key={value}
              value={value}
              className={styles.option}
              setValue={setValue}
              setDisplay={setDisplay}
            >
              {display}
            </SortByDropdownOption>
          )
        })}
      </div>
    </div>
  )
}