import React from 'react';
import styles from './CheckboxInput.module.scss'

export const CheckboxInput = (props) => {
  const {
    label,
    id,
    onChange,
    checked
  } = props;

  return (
    <label
      data-testid='checkbox-input'
      className={styles.label}
      htmlFor={id}
    >
      <input
        type="checkbox"
        className={styles.input}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  )
}