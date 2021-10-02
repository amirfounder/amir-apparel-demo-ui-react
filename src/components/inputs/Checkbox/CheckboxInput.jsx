import React from 'react';
import styles from './CheckboxInput.module.scss'

export const CheckboxInput = (props) => {
  const {
    label,
    id,
    onChange,
    value,
    checked
  } = props;

  return (
    <label
      className={styles.label}
      htmlFor={id}
    >
      <input
        type="checkbox"
        className={styles.input}
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  )
}