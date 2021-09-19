import React from "react";
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.column}>
        Left
      </div>
      <div className={styles.column}>
        Center
      </div>
      <div className={styles.column}>
        Right
      </div>
    </div>
  )
}