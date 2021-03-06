import React from 'react';
import constants from '../../../../utils/constants';
import { Heading } from '../../../Heading';
import { Paragraph } from '../../../Paragraph';
import styles from './CartItem.module.scss'

export const CartItem = (props) => {
  const {
    lineItem
  } = props;

  const { product } = lineItem;

  return (
    <div className={styles.main}>
      <div className={styles.column}>
        <img
          alt='placeholder'
          src={constants.PLACEHOLDER_IMAGE_URL}
          className={styles.image}
        />
      </div>
      <div className={styles.column}>
        <div>
          <Heading level={3}>
            {product?.name}
          </Heading>
          <Paragraph className={styles.description}>
            {product?.description}
          </Paragraph>
          <div className={styles.quantity}>
            Quantity: {lineItem?.quantity}
          </div>
        </div>
        <div className={styles.links}>
          <span className={styles.link}>Delete</span>
        </div>
      </div>
      {/* <div className={styles.column}>
        Count: {product?.quantity}
      </div> */}
    </div>
  )
}