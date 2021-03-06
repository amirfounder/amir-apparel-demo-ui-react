import React from 'react';
import styles from './Page.module.scss';

export const Page = React.memo((props) => {
  const {
    children,
    dataTestId,
    style
  } = props;

  return (
    <>
      <div
        style={style}
        data-testid={dataTestId || 'page'}
        className={styles.main}
      >
        {children}
      </div>
    </>
  )
})