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
import { QuantityPicker } from './QuantityPicker/QuantityPicker';

export const ProductPage = () => {

  const {
    nameAndId
  } = useParams();

  const [product, setProduct] = useState({});
  const [apiError, setApiError] = useState('')
  const [shippingToggle, setShippingToggle] = useState(false);
  const [quantity, setQuantity] = useState(1)

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
          <QuantityPicker
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <div className={styles.actions}>
            <Button>Add to Cart</Button>
            <Button type='secondary'>Add to Wish List</Button>
          </div>
          <div className={styles.shippingCosts}>
            <div>
              Shipping Costs: $0
            </div>
          </div>
          <div className={styles.promotions}>
            No Active Promotions for this product
          </div>
          <div className={styles.toggles}>
            <Toggle>
              <Toggle.Header
                show={shippingToggle}
                setShow={setShippingToggle}
              >
                <Heading
                  style={{marginBottom: 0}}
                  level={3}
                >
                  Shipping & FREE Returns
                </Heading>
              </Toggle.Header>
              <Toggle.Content show={shippingToggle}>
                <Paragraph>
                  Free shipping comes for all Amir Apparel Demo members.<br/>
                  <u>Click here</u> to learn more.
                </Paragraph>
              </Toggle.Content>
            </Toggle>
          </div>
        </div>
      </div>
    </Page>
  )
}