import React from 'react';
import styles from './Toggle.module.scss'
import { RiArrowDropDownLine } from 'react-icons/ri'

export const ToggleHeader = (props) => {
  const {
    children,
    toggleShow,
    show,
    className,
    dataTestId
  } = props;

  return (
    <div
      data-testid={dataTestId || 'toggle-header'}
      className={`
        ${styles.header}
        ${className || styles.padding}
      `}
      onClick={toggleShow}
    >
      <div>
        {children}
      </div>
      <>
        <RiArrowDropDownLine
          data-testid='toggle-header-icon'
          className={`
            ${styles.icon}
            ${show && styles.show}
          `}
        />
      </>
    </div>
  )
}