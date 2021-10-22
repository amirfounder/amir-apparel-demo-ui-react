import React from 'react';
import { Heading } from '../../../Heading';
import styles from './WidgetContainer.module.scss'

export const WidgetContainer = (props) => {
  const {
    children,
    name,
  } = props;

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Heading ignoreMargin level='3'>
          {name}
        </Heading>
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}