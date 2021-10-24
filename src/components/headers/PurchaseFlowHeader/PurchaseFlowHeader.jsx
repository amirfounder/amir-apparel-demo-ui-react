import React from 'react';
import { Button } from '../../Button';
import { Logo } from '../../Logo';
import styles from './PurchaseFlowHeader.module.scss'

export const PurchaseFlowHeader = () => {
  return (
    <div className={styles.main}>
      <div>
        <Logo />
      </div>
      <div className={styles.actions}>
        <Button type="secondary">
          Login / Register
        </Button>
      </div>
    </div>
  )
}