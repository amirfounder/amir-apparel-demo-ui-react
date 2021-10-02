import React from "react";
import { ProductCard } from "../ProductCard";
import styles from './ProductGrid.module.scss'

export const ProductGrid = (props) => {
  const {
    products
  } = props;

  return (
    <div className={styles.main}>
      {Array.isArray(products) && products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
        />
      ))}
    </div>
  )
}