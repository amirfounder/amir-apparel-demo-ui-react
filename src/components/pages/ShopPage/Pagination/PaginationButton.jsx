import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { updateSearchQueryKeyValuePair, scrollToTop } from '../../../../utils/utils';
import styles from './Pagination.module.scss';

export const PaginationButton = (props) => {
  const {
    children,
    active
  } = props;

  const history = useHistory();
  const location = useLocation();
  const clickable = children !== '...'

  const handleButtonClick = () => {
    const searchQuery = updateSearchQueryKeyValuePair(
      location.search,
      'page',
      children - 1
    )
    history.push(location.pathname + searchQuery)
    scrollToTop()
  }

  return (
    <div
      onClick={clickable ? handleButtonClick: undefined}
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
