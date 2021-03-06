import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import constants from '../../../utils/constants';
import { parseIdFromProductPageNameAndIdParam } from '../../../utils/utils';
import { Button } from '../../Button';
import { Page } from '../../Page';
import { Heading } from '../../Heading';
import { Paragraph } from '../../Paragraph';
import { Toggle } from '../../Toggle/Toggle';
import styles from './ProductPage.module.scss';
import { getProductById } from './ProductPageService';
import { QuantityPicker } from './QuantityPicker';
import { buildCartProductDTO } from '../../../dtos/cardProductDto';

export const ProductPage = () => {

  const {
    cartDispatcher
  } = useCartContext();

  const location = useLocation();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1)
  const [apiError, setApiError] = useState('')
  const [shippingToggle, setShippingToggle] = useState(false);

  const toggleShippingShow = () => setShippingToggle((prevState) => !prevState);
  
  const handleAddToCartClick = () => {
    const productToDispatch = buildCartProductDTO(product)
    cartDispatcher({
      type: 'add',
      product: productToDispatch,
      quantity
    })
    setQuantity(1)
  }

  useEffect(() => {
    const id = parseIdFromProductPageNameAndIdParam(location.pathname);
    getProductById(id, setProduct, setApiError);
  }, [location.pathname])

  return (
    <Page dataTestId="product-page">
      <div className={styles.main}>
        {apiError && <p data-testid='api-error-message' >{apiError}</p>}
        <div className={styles.column}>
          <img
            alt=""
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
            <Button
              onClick={handleAddToCartClick}
              dataTestId='add-to-cart-button'
            >
              Add to Cart
            </Button>
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
                dataTestId='shipping-toggle-header'
                show={shippingToggle}
                toggleShow={toggleShippingShow}
              >
                <Heading level={3}>
                  Shipping & FREE Returns
                </Heading>
              </Toggle.Header>
              <Toggle.Content
                dataTestId='shipping-toggle-content'
                show={shippingToggle}
              >
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