import React from 'react';
import styles from './Page.module.scss';

export const Page = React.memo((props) => {
  const {
    children,
    dataTestId,
    style
  } = props;

  console.log('rendered the page!')

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