import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "../auth/SignUpForm";
import ResponsiveSignup from "./ResponsiveSignup";
import './Modal.css'


function SignupModal({ width }) {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function menu() {
    setShowMenu((showMenu) => !showMenu);
  }

  return width < 1000 ? (
    <>
      <button
        id="signup-button"
        className="signup-modal"
        onClick={() => setShowMenu((showMenu) => !showMenu)}
      >
        Sign up
      </button>
      <ResponsiveSignup showMenu={showMenu} menu={menu} width={width} />
    </>
  ) : (
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
          <SignUpForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default SignupModal;
