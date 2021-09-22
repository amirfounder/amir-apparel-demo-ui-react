import React from 'react';
import styles from './Toggle.module.scss'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

export const ToggleHeader = (props) => {
  const {
    children,
    setShow,
    show
  } = props;

  const handleHeaderClick = () => setShow((prevState) => !prevState);

  return (
    <div
      className={styles.header}
      onClick={handleHeaderClick}
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