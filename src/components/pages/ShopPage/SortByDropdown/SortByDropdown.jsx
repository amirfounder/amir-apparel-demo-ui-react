import React, { useRef, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useLocation } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import { buildSearchQueryObject } from '../../../../utils/utils';
import styles from './SortByDropdown.module.scss';
import { SortByDropdownContent } from './SortByDropdownContent';

const dropdownOptions = [
  {display: 'Price (Lowest)', value:'price,asc'},
  {display: 'Price (Highest)', value:'price,desc'},
  {display: 'Name', value:'name'}
]

export const SortByDropdown = () => {
  const componentRef = useRef(null);
  const location = useLocation();

  const [showDropdown, setShowDropdown] = useState(false);
  const [display, setDisplay] = useState(null)
  const [, setValue] = useState(null)

  const handleClickOutsideComponent = (e) => {
    if (!componentRef?.current?.contains(e.target)) {
      setShowDropdown(false);
    }
  }

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  }

  useEffect(() => {
    document.addEventListener(
        'mousedown',
        handleClickOutsideComponent
      )
    return () => {
      document.removeEventListener(
          'mouseenter',
          handleClickOutsideComponent
        )
    }
  }, [])

  useEffect(() => {
    const searchQueryObject = buildSearchQueryObject(location.search)
    if ('sort' in searchQueryObject) {
      setValue(searchQueryObject.sort)
    }
  }, [setValue])

  return (
    <div
      ref={componentRef}
      className={styles.main}
      onClick={toggleDropdown}
    >
      <div>
        {display ? `Sort By: ${display}` : 'Sort By'}
        <SortByDropdownContent
          options={dropdownOptions}
          setValue={setValue}
          setDisplay={setDisplay}
          show={showDropdown}
        />
      </div>
      <div className={styles.icon}>
        <RiArrowDropDownLine />
      </div>
    </div>
  )
}