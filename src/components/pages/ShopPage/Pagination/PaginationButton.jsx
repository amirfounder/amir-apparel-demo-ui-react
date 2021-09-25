import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { buildSearchQuery, parseSearchQuery, scrollToTop } from '../../../../utils/utils';
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
    const searchQueryObj = parseSearchQuery(location.search)
    searchQueryObj.page = children - 1
    const searchQuery = buildSearchQuery(searchQueryObj)
    const path = location.pathname
    history.push(path + searchQuery)
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
