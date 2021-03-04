import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from '../auth/LoginForm'
import "./Modal.css";


function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        id="login-button"
        className="login-modal"
        onClick={() => setShowModal(true)}
      >
        Log In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}

export default LoginModal;
