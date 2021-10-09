import React, { useEffect } from 'react';
import styles from '../Pagination.module.scss'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { updateSearchQueryKeyValuePair, scrollToTop } from '../../../../../utils/utils';
import { useHistory, useLocation } from 'react-router';
import { buildPaginationArrowTargetSearchQuery } from './PaginationArrowService';

export const PaginationArrow = (props) => {
  const {
    direction,
    currentPage,
    totalPages,
    dataTestId
  } = props;

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (typeof direction !== 'string' || !['right', 'left'].includes(direction.toLowerCase())) {
      throw new Error("Direction prop must either be of value 'right' or 'left'")
    }
  })

  const handleClick = (direction) => {
    const searchQuery =
      buildPaginationArrowTargetSearchQuery(
        location.search,
        currentPage,
        direction
      )
    history.push(searchQuery);
    scrollToTop()
  }

  const handleRightArrowClick = () => handleClick('right')
  const handleLeftArrowClick = () => handleClick('left')

  return (
    <>
      {
        direction === 'right' ?
        <RiArrowRightSLine data-testid={dataTestId || 'pagination-arrow'} onClick={handleRightArrowClick} className={styles.arrow} /> :
        <RiArrowLeftSLine data-testid={dataTestId || 'pagination-arrow'} onClick={handleLeftArrowClick} className={styles.arrow} /> 
      }
    </>
  )

}