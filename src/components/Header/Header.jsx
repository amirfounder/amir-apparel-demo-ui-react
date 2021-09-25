import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.scss'
import { useHistory } from "react-router-dom";
import { BiCartAlt, BiShoppingBag } from 'react-icons/bi'
import { useCartContext } from "../../context/CartContext";

export const Header = () => {
  const {
    cart
  } = useCartContext();
  const history = useHistory();

  const generateCartBadgeNumber = (cart) => {
    if (Array.isArray(cart)) {
      if (cart.length > 99) {
        return '99+'
      }
      return cart.length
    }
    return '0'
  }

  const handleCartIconClick = () => history.push('/cart')

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.column}>
          <div>
            Contact Support
          </div>
          <div>
            FREE Shipping on Orders of $100+
          </div>
        </div>
        <div className={styles.column}>
          <Link to="/register" className={styles.navLink}>Register</Link>
          <Link to="/login" className={styles.navLink}>Login</Link>
          <Link to="/contact" className={styles.navLink}>Feedback</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.column}>
          <Link to="/" className={styles.navLink}>
            AA
          </Link>
        </div>
        <div className={styles.column}>
          <div className={styles.menu}>
            <Link to="/shop" className={styles.navLink}>New Releases</Link>
            <Link to="/shop" className={styles.navLink}>Men</Link>
            <Link to="/shop" className={styles.navLink}>Women</Link>
            <Link to="/shop" className={styles.navLink}>Kids</Link>
            <Link to="/shop" className={styles.navLink}>Sale</Link>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.actions}>
            <BiShoppingBag className={styles.icon} />
            <div className={styles.cart}>
              <BiCartAlt
                onClick={handleCartIconClick}
                className={styles.icon}
              />
              <div className={styles.badge}>
                {generateCartBadgeNumber(cart)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}