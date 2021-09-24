import React, { useState } from 'react';
import { useShopContext } from '../../../../context/ShopContext';
import styles from './Pagination.module.scss';
import { PaginationButton } from './PaginationButton';

export const Pagination = () => {
  const {
    currentPage,
    totalPages
  } = useShopContext();

  const [buttonValues, setButtonValues] = useState([])

  const calculateButtonValues = () => {
    const TOTAL_PAGINATION_BUTTONS = 7
    const localButtonValues = [];
    if (totalPages > 0) {
      localButtonValues.push(1);
      if (totalPages > 6)
      console.log('lol')
    }
    setButtonValues(localButtonValues);
  }

  return (
    <div className={styles.main}>
      <div
        className={styles.buttons}
        style={{gridTemplateColumns: 'repeat(7, auto)'}}
      >
        {Array.isArray(buttonValues) && buttonValues.map((value, index) => {

        })}
        <PaginationButton>1</PaginationButton>
        <PaginationButton>...</PaginationButton>
        <PaginationButton>4</PaginationButton>
        <PaginationButton>5</PaginationButton>
        <PaginationButton>6</PaginationButton>
        <PaginationButton>...</PaginationButton>
        <PaginationButton>10</PaginationButton>
      </div>
    </div>
  )
}
