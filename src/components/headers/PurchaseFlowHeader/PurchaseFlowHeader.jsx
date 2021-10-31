import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Button } from '../../Button';
import { Logo } from '../../Logo';
import { LoginRegisterModal } from '../../modals/LoginRegisterModal/LoginRegisterModal';
import styles from './PurchaseFlowHeader.module.scss'

export const PurchaseFlowHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleSetShowModal = () => setShowModal((prevState) => !prevState);

  return (
    <>
      <div className={styles.main}>
        <div>
          <Logo />
        </div>
        <div className={styles.actions}>
          <Button
            onClick={toggleSetShowModal}
            type="secondary"
          >
            Login / Register
          </Button>
        </div>
      </div>
      <LoginRegisterModal
        show={showModal}
        setShow={setShowModal}
      />
    </>
  )
}