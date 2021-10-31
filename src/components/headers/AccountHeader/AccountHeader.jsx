import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useUserContext } from '../../../context/UserContext/UserContext';
import styles from './AccountHeader.module.scss';

export const AccountHeader = () => {
  const {
    dispatchUser,
    state: { isLoggedIn }
  } = useUserContext();
  const history = useHistory();

  const handleLogout = () => {
    dispatchUser({ type: 'logout' })
    history.push('/')
  }

  return (
    <div className={styles.main}>
      <div className={styles.column}>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
        <Link to="/shop" className={styles.navLink}>FREE Shipping on Orders of $100+</Link>
      </div>
      <div className={styles.column}>
        {
          !isLoggedIn
          ? (
            <>
              <Link to="/register" className={styles.navLink}>Register</Link>
              <Link to="/login" className={styles.navLink}>Login</Link>
            </>
          ) : (
            <>
              <Link to="/profile" className={styles.navLink}>Your Account</Link>
              <span onClick={handleLogout} className={styles.navLink}>Logout</span>
            </>
          )
        }
      </div>
    </div>
  )
}