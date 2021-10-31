import React from 'react';
import styles from './Modal.module.scss'

export const Modal = (props) => {
  const {
    children,
    show,
    setShow,
    overlayColor
  } = props;

  const handleOverlayClick = (e) => {
    setShow(false);
  }

  const handleContainerClick = (e) => { e.stopPropagation() }

  return (
    <div
      className={`
        ${styles.overlay}
        ${show ? styles.show : styles.hidden}
      `}
      style={{backgroundColor: overlayColor || 'rgba(0, 0, 0, .12)'}}
      onClick={handleOverlayClick}
    >
      <div
        onClick={handleContainerClick}
        className={styles.container}
      >
        {children}
      </div>
    </div>
  )
}