import React from 'react';
import styles from './ContainedPage.module.scss';

export const ContainedPage = React.memo((props) => {
  const {
    children,
    dataTestId,
  } = props;

  return (
    <>
      <div
        data-testid={dataTestId || 'contained-page'}
        className={styles.main}
      >
        <div
          className={styles.container}
        >
          {children}
        </div>
      </div>
    </>
  )
})