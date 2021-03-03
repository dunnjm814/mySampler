import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "../auth/SignUpForm";
import './Modal.css'


function SignupModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        id="signup-button"
        className="signup-modal"
        onClick={() => setShowModal(true)}
      >
        Sign up
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}

export default SignupModal;
