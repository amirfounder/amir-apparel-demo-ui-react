import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import constants from '../../../utils/constants';
import { parseIdFromProductPageNameAndIdParam } from '../../../utils/utils';
import { Button } from '../../Button';
import { Heading } from '../../Heading';
import { Page } from '../../Page';
import { Paragraph } from '../../Paragraph';
import { Toggle } from '../../Toggle/Toggle';
import styles from './ProductPage.module.scss';
import { getProductById } from './ProductPageService';

export const ProductPage = () => {

  const {
    nameAndId
  } = useParams();

  const [product, setProduct] = useState({});
  const [apiError, setApiError] = useState('')
  const [shippingToggle, setShippingToggle] = useState(false)

  useEffect(() => {
    const id = parseIdFromProductPageNameAndIdParam(nameAndId);
    getProductById(id, setProduct, setApiError);
  }, [nameAndId])

  return (
    <Page>
      <div className={styles.main}>
        {apiError && <p>{apiError}</p>}
        <div className={styles.column}>
          <img
            src={constants.PLACEHOLDER_IMAGE_URL}
            width='100%'
          />
        </div>
        <div className={styles.column}>
          <Heading
            className={styles.title}
            level={1}
          >
            {product.name}
          </Heading>
          <div className={styles.price}>
            ${product.price?.toFixed(2)}
          </div>
          <Paragraph className={styles.description}>
            {product.description}
          </Paragraph>
          <div className={styles.actions}>
            <Button>
              Add to Cart
            </Button>
            <Button>
              Add to Wish List
            </Button>
          </div>
          <div className={styles.shippingCosts}>
            <div>
              Shipping Costs:
            </div>
            <div>
              Login to view accurate Shipping Data
            </div>
          </div>
          <div className={styles.promotions}>
            No Active Promotions for this product
          </div>
          <div className={styles.toggles}>
            <Toggle>
              <Toggle.Header setShow={setShippingToggle}>
                Shipping & Handling
              </Toggle.Header>
              <Toggle.Content show={shippingToggle}>
                Some stuff
              </Toggle.Content>
            </Toggle>
          </div>
        </div>
      </div>
    </Page>
  )
}