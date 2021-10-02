import React, { useRef, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useEffect } from 'react/cjs/react.development';
import styles from './SortByDropdown.module.scss';
import { SortByDropdownContent } from './SortByDropdownContent';

const dropdownOptions = [
  {display: 'Price (Lowest)', value:'price,asc'},
  {display: 'Price (Highest)', value:'price,desc'},
  {display: 'Name', value:'name'}
]

export const Select = (props) => {
  const {
    options,
  } = props

  const test = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState(Array.isArray(options) ? options[0]?.value : null)

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  }

  const handleClick = (e) => {
    if (test.current.contains(e.target)) {
      console.log('clicked the dropdon')
    } else {
      console.log('clicked out of compoennt')
      toggleDropdown()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mouseenter', handleClick)
    }
  })

  return (
    <div
      ref={test}
      className={styles.main}
      onClick={toggleDropdown}
    >
      <div>
        <div>
          {value ? `Sort By: ${value}` : 'Sort By'}
        </div>
        <SortByDropdownContent
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