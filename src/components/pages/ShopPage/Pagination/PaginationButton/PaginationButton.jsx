import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { updateSearchQueryKeyValuePair, scrollToTop } from '../../../../../utils/utils';
import styles from '../Pagination.module.scss';

export const PaginationButton = (props) => {
  const {
    children,
    active,
    dataTestId
  } = props;

  const history = useHistory();
  const location = useLocation();

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
      className={`
        ${styles.button}
        ${styles.clickable}
        ${active && styles.active}
      `}
      data-testid={dataTestId || 'pagination-button'}
      onClick={handleButtonClick}
    >
        {children}
    </div>
  )
}
