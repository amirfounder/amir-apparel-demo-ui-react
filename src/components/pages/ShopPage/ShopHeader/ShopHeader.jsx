import React from 'react';
import { useShopContext } from '../../../../context/ShopContext';
import { Heading } from '../../../Heading';
import styles from './ShopHeader.module.scss'

export const ShopHeader = () => {

  const {
    showSidebar, setShowSidebar
  } = useShopContext();

  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Heading>
          Shop Products
        </Heading>
      </div>
      <div className={styles.buttons}>
        <button onClick={toggleSidebar}>
          {showSidebar ? `Hide Filters` : 'Show Filters'}
        </button>
        <button>
          button two
        </button>
      </div>
    </div>
  )
}