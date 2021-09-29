import React from 'react';
import styles from '../inputs.module.scss'

export const SelectDropdown = (props) => {
  const {
    options,
    setShow,
    setValue,
    show
  } = props;

  const handleOptionClick = (e) => {
    setShow((prevState) => !prevState);
    setValue(e.target.value)
  }

  return (
    <div
      hidden={!show}
      style={{
        position: 'absolute',
        top: '100%',
        left: '100%',
        transform: 'translateX(-100%)'
      }}
    >
      <div className={styles.content}>
        {Array.isArray(options) && options.map((option) => {
          const { display, value } = option;
          return (
            <div
            value={value}
            onClick={handleOptionClick}
            className={styles.option}
            >
              {display}
            </div>
          )
        })}
      </div>
    </div>
  )
}