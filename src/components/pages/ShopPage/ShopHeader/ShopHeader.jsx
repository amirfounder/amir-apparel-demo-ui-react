import React from 'react';
import { RiFilter3Line } from 'react-icons/ri';
import { useShopContext } from '../../../../context/ShopContext';
import { Heading } from '../../../Heading';
import { Select } from '../../../inputs/SortByDropdown/SortByDropdown';
import styles from './ShopHeader.module.scss'

export const ShopHeader = () => {

  const {
    showSidebar,
    setShowSidebar
  } = useShopContext();

  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Heading level={1}>
          Shop Products
        </Heading>
      </div>
      <div className={styles.buttons}>
        <div
          className={styles.filterContainer}
          onClick={toggleSidebar}
        >
          {showSidebar ? `Hide Filters` : 'Show Filters'}
          <RiFilter3Line className={styles.filterIcon} />
        </div>
        <Select
          options={[
            {displayText: 'lol', value: 'lol'},
            {displayText: 'lol', value: 'lol'},
            {displayText: 'lol', value: 'lol'}
          ]}
        />
      </div>
    </div>
  )
}