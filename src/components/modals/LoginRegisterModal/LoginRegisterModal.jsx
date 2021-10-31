import React from 'react';
import { Modal } from '../../Modal';

export const LoginRegisterModal = (props) => {
  const {
    show,
    setShow
  } = props;

  return (
    <Modal show={show}>
      <div>
        lol
      </div>
      <button onClick={setShow((prevState) => !prevState)}>
        toggle
      </button>
    </Modal>
  )
}
