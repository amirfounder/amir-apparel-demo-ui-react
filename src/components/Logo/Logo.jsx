import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <Link
      to="/"
      className={styles.main}
    >
      AA
    </Link>
  )
}