import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom'
import { Modal } from "../../context/Modal";
import LoginForm from '../auth/LoginForm'
import "./Modal.css";


function LoginModal() {
  const { pathname } = useLocation();
  console.log(pathname)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (pathname === '/login') {
        setShowModal(true)
    }
  }, [pathname])
  if(pathname === '/login'){
    return (
      <Modal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal} />
        </Modal>

    );
  } else {
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
            <LoginForm setShowModal={setShowModal} />
          </Modal>
        )}
      </>
    );
  }
}

export default LoginModal;
