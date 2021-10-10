import React from "react";
import { useHistory } from "react-router-dom";
import constants from "../../../../utils/constants";
import { scrollToTop } from "../../../../utils/utils";
import { Heading } from "../../../Heading";
import styles from './ProductCard.module.scss'

export const ProductCard = (props) => {
  const {
    product
  } = props;

  const history = useHistory();

  const handleProductCardClick = () => {
    const productSlug = String(product?.name).toLowerCase().split(' ').join('-')
    history.push(`/p/${productSlug}-${product.id}`)
    scrollToTop()
  }

  return (
    <div
      className={styles.main}
      onClick={handleProductCardClick}
      data-testid='product-card'
    >
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${constants.PLACEHOLDER_IMAGE_URL})`,
          backgroundSize: 'cover',
          backgroundColor: '#ddd',
          backgroundPosition: 'center'
        }}
      />
      <div className={styles.content}>
        <div className={styles.heading}>
          <Heading
            level={3}
          >
            {product?.name}
          </Heading>
        </div>
        <p className={styles.description}>
          {product?.description}
        </p>
        <div className={styles.price}>
          <span className={styles.priceLabel}>Your investment: </span>
          <span className={styles.priceValue}>${Number(product?.price).toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}