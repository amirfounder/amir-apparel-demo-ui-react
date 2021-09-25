import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/utils';
import { Heading } from '../Heading';
import styles from './Footer.module.scss';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Footer = () => {

  const [year] = useState(new Date().getFullYear());
  
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.column}>
          <Heading>About</Heading>
          <Link onClick={scrollToTop} to="/about" className={styles.navLink}>About</Link>
          <Link onClick={scrollToTop} to="/careers" className={styles.navLink}>Careers</Link>
          <Link onClick={scrollToTop} to="/contact" className={styles.navLink}>Contact</Link>
          <Link onClick={scrollToTop} to="/press" className={styles.navLink}>Press</Link>
        </div>
        <div className={styles.column}>
          <Heading>Shop</Heading>
          <Link onClick={scrollToTop} to="/shop" className={styles.navLink}>Men</Link>
          <Link onClick={scrollToTop} to="/shop" className={styles.navLink}>Women</Link>
          <Link onClick={scrollToTop} to="/shop" className={styles.navLink}>Kids</Link>
          <Link onClick={scrollToTop} to="/shop" className={styles.navLink}>New Releases</Link>
          <Link onClick={scrollToTop} to="/shop" className={styles.navLink}>Sale</Link>
        </div>
        <div className={styles.column}>
          <div className={styles.social}>
            <FaFacebookF className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.column}>
          Copyright (C) {year}
        </div>
        <div className={styles.column}>

        </div>
      </div>
    </div>
  )
}