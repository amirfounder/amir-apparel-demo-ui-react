import React from 'react';
import styles from './ContainedPage.module.scss';

export const ContainedPage = React.memo((props) => {
  const {
    children,
    dataTestId,
    style
  } = props;

  return (
    <>
      <div
        style={style}
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