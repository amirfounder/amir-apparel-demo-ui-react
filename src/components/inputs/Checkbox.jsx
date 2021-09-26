import React from 'react';
import styles from './Input.module.scss'

export const Checkbox = (props) => {
  const {
    label,
    id,
    onChange,
    value
  } = props;

  return (
    <label
      className={styles.label}
      htmlFor={id}
    >
      <input
        type="checkbox"
        id={id}
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  )
}