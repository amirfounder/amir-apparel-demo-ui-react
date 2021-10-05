import React from 'react';
import styles from './Page.module.scss';

export const Page = React.memo((props) => {
  const {
    children,
    dataTestId
  } = props;

  return (
    <div
      data-testId={dataTestId || 'page'}
      className={styles.main}
    >
      {children}
    </div>
  )
})