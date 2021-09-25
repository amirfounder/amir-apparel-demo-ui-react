import React, { useEffect } from 'react';
import styles from './Pagination.module.scss'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { rebuildSearchQueryWithUpdatedKeyValue, scrollToTop } from '../../../../utils/utils';
import { useHistory, useLocation } from 'react-router';

export const PaginationArrow = (props) => {
  const {
    direction,
    currentPage,
    totalPages
  } = props;

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (typeof direction !== 'string' || !['right', 'left'].includes(direction.toLowerCase())) {
      throw new Error("Direction prop must either be of value 'right' or 'left'")
    }
  })

  const handleClick = (direction) => {
    const currentSearchQuery = location.search;
    const key = 'page';
    const value = direction === 'right' ? currentPage : currentPage - 2
    const searchQuery = rebuildSearchQueryWithUpdatedKeyValue(currentSearchQuery, key, value)
    history.push(searchQuery);
    scrollToTop()
  }

  const handleRightArrowClick = () => currentPage < totalPages && handleClick('right')

  const handleLeftArrowClick = () => currentPage > 1 && handleClick('left')

  return (
    <>
      {
        direction === 'right' ?
        <RiArrowRightSLine onClick={handleRightArrowClick} className={styles.arrow} /> :
        <RiArrowLeftSLine onClick={handleLeftArrowClick} className={styles.arrow} /> 
      }
    </>
  )

}