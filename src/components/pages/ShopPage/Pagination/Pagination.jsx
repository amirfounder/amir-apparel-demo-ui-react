import React, { useEffect, useState } from 'react';
import styles from './Pagination.module.scss';
import { PaginationArrow } from './PaginationArrow';
import { PaginationButton } from './PaginationButton';
import { buildGridColumns, generatePaginationButtonValues } from './PaginationService';

export const Pagination = (props) => {
  const {
    currentPage,
    totalPages,
  } = props;

  const [buttonValues, setButtonValues] = useState([]);
  const [buttonGridColumns, setButtonGridColumns] = useState(7);

  useEffect(() => {
    setButtonValues(generatePaginationButtonValues(currentPage, totalPages));
    setButtonGridColumns(buildGridColumns(totalPages));
  }, [currentPage, totalPages]);


  return (
    <div
      data-testid='pagination'
      className={styles.main}
    >
      {totalPages > 1 && <div
        className={styles.buttons}
        style={{gridTemplateColumns: `repeat(${buttonGridColumns}, 1fr)`}}
      >
        {currentPage > 1 ?
        <PaginationArrow
          currentPage={currentPage}
          totalPages={totalPages}
          direction='left'
          dataTestId={'left-pagination-arrow'}
        /> :
        <div />}
        {Array.isArray(buttonValues) && buttonValues.map((buttonValue) => (
          <PaginationButton
            key={buttonValue}
            active={currentPage === buttonValue}
          >
            {buttonValue}
          </PaginationButton>
        ))}
        {currentPage < totalPages ?
        <PaginationArrow
          currentPage={currentPage}
          totalPages={totalPages}
          direction='right'
          dataTestId={'right-pagination-arrow'}
        /> :
        <div />}
      </div>}
    </div>
  )
}
