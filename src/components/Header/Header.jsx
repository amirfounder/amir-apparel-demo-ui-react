import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import styles from './Header.module.scss'
import { useHistory } from "react-router-dom";

export const Header = () => {

  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login')
  }

  return (
    <div className={styles.main}>
      <div className={styles.column}>
        <Link to="/" className={styles.navLink}>Amir Apparel Demo</Link>
      </div>
      <div className={styles.column}>
        <div className={styles.menu}>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/shop" className={styles.navLink}>Shop</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.loginRegisterLinks}>
          <Link to="/register" className={styles.navLink}>Register</Link>
          <Button onClick={handleLoginClick}>
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}