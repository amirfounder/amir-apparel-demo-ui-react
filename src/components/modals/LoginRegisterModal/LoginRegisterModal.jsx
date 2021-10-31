import React from 'react';
import { Heading } from '../../Heading';
import { LoginWithGoogle } from '../../LoginWithGoogle';
import { Modal } from '../../Modal';
import styles from './LoginRegisterModal.module.scss'

export const LoginRegisterModal = (props) => {
  const {
    show,
    setShow
  } = props;

  const onLoginSuccess = () => {
    setShow(false);
  }

  return (
    <Modal
      show={show}
      setShow={setShow}
      overlayColor='rgba(0, 0, 0, .24)'
    >
      <div className={styles.main}>
        <div>
          <Heading>
            Login
          </Heading>
        </div>
        <LoginWithGoogle
          onSuccess={onLoginSuccess}
        />
      </div>
    </Modal>
  )
}
