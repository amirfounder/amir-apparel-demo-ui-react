import React from 'react';
import styles from '../input.module.scss'

export const TextInput = (props) => {
  const {
    label,
    id,
    onChange,
    value
  } = props;

  return (
    <label
      data-testid='text-label'
      className={styles.label}
      htmlFor={id}
    >
      <input
        data-testid='text-input'
        type="text"
        className={styles.input}
        id={id}
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  )
}