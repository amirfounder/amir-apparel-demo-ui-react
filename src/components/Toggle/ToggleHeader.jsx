import React from 'react';
import styles from './Toggle.module.scss'
import { RiArrowDropDownLine } from 'react-icons/ri'

export const ToggleHeader = (props) => {
  const {
    children,
    toggleShow,
    show,
    className,
    customClass
  } = props;

  return (
    <div
      className={`
        ${styles.header}
        ${customClass ? className : styles.padded}
      `}
      onClick={toggleShow}
    >
      <div>
        {children}
      </div>
      <>
        <RiArrowDropDownLine
          size="35px"
          className={`
            ${styles.icon}
            ${show && styles.show}
          `}
        />
      </>
    </div>
  )
}