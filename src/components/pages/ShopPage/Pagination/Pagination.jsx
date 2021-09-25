import React, { useEffect, useState } from 'react';
// import { useShopContext } from '../../../../context/ShopContext';
import styles from './Pagination.module.scss';
import { PaginationButton } from './PaginationButton';
import { generatePaginationButtonValues } from './PaginationService';

export const Pagination = (props) => {
  const {
    currentPage,
    totalPages
  } = props;

  const [buttonValues, setButtonValues] = useState([])
  const [buttonGridColumns, setButtonGridColumns] = useState(7)

  useEffect(() => {
    setButtonValues(generatePaginationButtonValues(currentPage, totalPages))
    setButtonGridColumns(totalPages > 7 ? 7 : totalPages);
  }, [currentPage, totalPages])


  return (
    <div className={styles.main}>
      <div
        className={styles.buttons}
        style={{gridTemplateColumns: `repeat(${buttonGridColumns}, auto)`}}
      >
        {Array.isArray(buttonValues) && buttonValues.map((buttonValue) => {
          console.log('buttonval', buttonValue)
          console.log('currentpage', currentPage)
          console.log(buttonValue === currentPage)
          return (
            <PaginationButton
              active={currentPage == buttonValue}
            >
              {buttonValue}
            </PaginationButton>
          )
          })}
      </div>
    </div>
  )
}
