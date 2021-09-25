import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { scrollToTop } from '../../../../utils/utils';
import styles from './Pagination.module.scss';

export const PaginationButton = (props) => {
  const {
    children,
    active
  } = props;

  const history = useHistory();
  const clickable = children !== '...'

  const handleButtonClick = () => {
    history.push(`/shop?page=${children - 1}`)
    scrollToTop()
  }

  return (
    <div
      onClick={clickable && handleButtonClick}
      className={`
        ${styles.button}
        ${clickable && styles.clickable}
        ${active && styles.active}
      `}
    >
        {children}
    </div>
  )
}
