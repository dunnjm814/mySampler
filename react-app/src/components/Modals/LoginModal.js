import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom'
import { Modal } from "../../context/Modal";
import LoginForm from '../auth/LoginForm'
import ResponsiveLogin from "./ResponsiveLogin";
import "./Modal.css";


function LoginModal({width}) {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function menu() {
    setShowMenu((showMenu) => !showMenu);
  }

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
    return width < 1000 ? (
      <>
        <button
          id="login-button"
          className="login-modal"
          onClick={() => setShowMenu(showMenu => !showMenu)}
        >
          Log In
        </button>
        <ResponsiveLogin showMenu={showMenu} menu={menu}/>
      </>
    ) : (
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
