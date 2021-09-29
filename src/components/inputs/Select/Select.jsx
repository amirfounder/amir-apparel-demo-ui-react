import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import styles from './Select.module.scss';
import { SelectDropdown } from './SelectDropdown';

const dropdownOptions = [
  {display: 'Price (Lowest)', value:'price,asc'},
  {display: 'Price (Highest)', value:'price,desc'},
  {display: 'Name', value:'name'}
]

export const Select = (props) => {
  const {
    options,
  } = props

  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState(Array.isArray(options) && options?.value)

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  }

  return (
    <div
      className={styles.main}
      onClick={toggleDropdown}
    >
      <div>
        <div className={styles.button}>
          {value ? `Sort By: ${value}` : 'Sort By'}
        </div>
        <SelectDropdown
          show={showDropdown}
          toggleDropdown={toggleDropdown}
          setValue={setValue}
          options={dropdownOptions}
        />
      </div>
      <div className={styles.icon}>
        <RiArrowDropDownLine />
      </div>
    </div>
  )
}