import React from 'react';
import styles from './TextInput.module.scss'

export const TextInput = (props) => {
  const {
    label,
    id,
    onChange,
    value,
    size
  } = props;

  const validSizes = ['small', 'medium', 'large'];

  const finalInputSizeClassName = validSizes.includes(size)
    ? `input--size-${size}`
    : `input--size-medium`

  return (
    <label
      data-testid='text-label'
      className={styles.label}
      htmlFor={id}
    >
      {label}
      <input
        data-testid='text-input'
        type="text"
        className={`
          ${styles.input}
          ${styles[finalInputSizeClassName]}
        `}
        id={id}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}