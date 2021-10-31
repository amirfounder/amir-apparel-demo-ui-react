import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useUserContext } from '../../../context/UserContext/UserContext';
import { Button } from '../../Button';
import { Logo } from '../../Logo';
import { LoginRegisterModal } from '../../modals/LoginRegisterModal/LoginRegisterModal';
import styles from './PurchaseFlowHeader.module.scss'

export const PurchaseFlowHeader = () => {
  const {
    state: {
      isLoggedIn,
      user
    }
  } = useUserContext();


  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => { setShowModal((prevState) => !prevState) };

  return (
    <>
      <div className={styles.main}>
        <div>
          <Logo />
        </div>
        <div className={styles.actions}>
          {isLoggedIn ?
            (
              <div style={{fontSize: '18px'}}>
                Welcome back, {user?.firstName}!
              </div>
            ) : (
              <Button
                onClick={toggleShowModal}
                type="secondary"
              >
                Login / Register
              </Button>
            )
          }
        </div>
      </div>
      <LoginRegisterModal
        show={showModal}
        setShow={setShowModal}
      />
    </>
  )
}