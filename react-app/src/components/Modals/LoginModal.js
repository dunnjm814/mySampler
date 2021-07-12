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
      // check screen width, use appropriate form handling
      width < 1000 ? setShowMenu(true) : setShowModal(true)
    }
  }, [pathname])
  if (pathname === '/login') {
    // due to protectedRoute component, if user accidentally finds their way
    // to a part of the app unintended for un-authorized users,
    // this checks if redirect occurs to /login and immediately opens login form
    return width < 1000 ? (
      <>
        <ResponsiveLogin showMenu={showMenu} menu={menu} width={width} />
      </>
    ) : (
      <>
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal} />
        </Modal>
      </>
    );
  } else {
    return width < 1000 ? (
      <>
        <button
          id="login-button"
          className="login-modal"
          onClick={() => setShowMenu(showMenu => !showMenu)}
        >
          Login
        </button>
        <ResponsiveLogin showMenu={showMenu} menu={menu} width={width}/>
      </>
    ) : (
      <>
        <button
          id="login-button"
          className="login-modal"
          onClick={() => setShowModal(true)}
        >
          Login
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
