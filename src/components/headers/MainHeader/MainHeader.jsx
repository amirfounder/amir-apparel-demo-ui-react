import React from "react";
import { Link } from "react-router-dom";
import styles from './MainHeader.module.scss'
import { Logo } from "../../Logo";
import { CartIcon } from "../../icons/CartIcon/CartIcon";
import { WishlistIcon } from "../../icons/WishlistIcon/WishlistIcon";

export const MainHeader = () => {
  return (
    <div className={styles.main} data-testid='main-header'>
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
          <Logo />
        </div>
        <div className={styles.column}>
          <div className={styles.menu}>
            <Link to="/shop" className={styles.navLink}>New Releases</Link>
            <Link to="/shop?demographic=men" className={styles.navLink}>Men</Link>
            <Link to="/shop?demographic=women" className={styles.navLink}>Women</Link>
            <Link to="/shop?demographic=kids" className={styles.navLink}>Kids</Link>
            <Link to="/shop" className={styles.navLink}>Sale</Link>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.actions}>
            <WishlistIcon />
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  )
}