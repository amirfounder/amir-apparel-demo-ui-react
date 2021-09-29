import React, { useState } from 'react';
import styles from '../inputs.module.scss';
import { SelectDropdown } from './SelectDropdown';

export const Select = (props) => {
  const {
    options,
    id,
  } = props

  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState(Array.isArray(options) && options?.value)

  const handleButtonClick = () => {
    setShowDropdown((prevState) => !prevState);
  }

  return (
    <div style={{position: 'relative', display: 'grid', alignItems: 'center'}}>
      <button
        className={styles.select}
        children={value || 'Click here'}
        onClick={handleButtonClick}
        id={id}
      />
      <SelectDropdown
        show={showDropdown}
        setShow={setShowDropdown}
        setValue={setValue}
        options={[
          {display: 'lol', value:'lol'},
          {display: 'lol', value:'lol'},
          {display: 'lol', value:'lol'}
        ]}
      />
    </div>
  )
}