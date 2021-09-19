import React from "react";
import constants from "../../utils/constants";
import { Button } from "../Button";
import { Heading } from "../Heading";
import styles from './ProductCard.module.scss'

export const ProductCard = (props) => {
  const {
    product
  } = props;

  return (
    <div className={styles.main}>
      <div
        className={styles.cardHeader}
        style={{
          backgroundImage: `url(${constants.PLACEHOLDER_IMAGE_URL})`,
          backgroundSize: 'cover',
          backgroundColor: '#ddd',
          backgroundPosition: 'center'
        }}
      />
      <div className={styles.cardBody}>
        <div className={styles.heading}>
          <Heading
            level={3}
          >
            {product.name}
          </Heading>
        </div>
        <p className={styles.paragraph}>
          {product.description}
        </p>
        <div className={styles.price}>
          <span className={styles.priceLabel}>Your investment: </span>
          <span className={styles.priceValue}>${product.price.toFixed(2)}</span>
        </div>
        <Button
          style={{
            backgroundColor: 'black',
            padding: '6px 20px',
            fontSize: '14px',
            fontWeight: 300
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  )
}