import React from "react";
import styles from './ProductCard.module.scss'

export const ProductCard = (props) => {
  const {
    product
  } = props;

  return (
    <div className={styles.main}>
      {product.name}
      {product.price}
      {product.description}
    </div>
  )
}