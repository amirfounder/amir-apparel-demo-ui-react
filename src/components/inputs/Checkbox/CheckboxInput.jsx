import React from 'react';
import styles from '../inputs.module.scss'

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
      className={styles.label__checkbox}
      htmlFor={id}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  )
}