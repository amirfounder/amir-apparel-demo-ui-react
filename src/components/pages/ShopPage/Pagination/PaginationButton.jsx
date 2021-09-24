import React from 'react';
import { useHistory } from 'react-router-dom';
import { scrollToTop } from '../../../../utils/utils';
import styles from './Pagination.module.scss';

export const PaginationButton = (props) => {
  const {
    children
  } = props;

  const history = useHistory();
  const active = /^[0-9]+$/.test(children)

  const handleButtonClick = () => {
    history.push(`/shop?page=${children}`)
    scrollToTop()
  }

  return (
    <div
      onClick={handleButtonClick}
      className={`
        ${styles.button}
        ${active && styles.active}
      `}
    >
        {children}
    </div>
  )
}
