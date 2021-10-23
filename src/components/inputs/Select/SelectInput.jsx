import React from 'react';
import styles from './SelectInput.module.scss'

export const SelectInput = (props) => {
  const {
    options,
    label,
    size,
    onChange,
    id,
    value,
    error
  } = props;

  const validSizes = ['small', 'large', 'medium']
  const finalInputSizeClassName = validSizes.includes(size)
    ? `select--size-${size}`
    : `select--size-medium`

  return (
    <label
      className={styles.label}
      htmlFor={id}
    >
      {label}
      <select
        onChange={onChange}
        className={`
          ${styles.select}
          ${styles[finalInputSizeClassName]}
        `}
        id={id}
        value={value}
      >
        {Array.isArray(options) && options.map((option) => {
          const text = option?.text || option
          const value = option?.value || option
          return (
            <option value={value}>
              {text}
            </option>
          )
        })}
      </select>
      <p className={styles.error}>{error}</p>
    </label>
  )
}