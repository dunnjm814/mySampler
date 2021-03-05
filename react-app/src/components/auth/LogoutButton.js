import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './Logout.css'

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = (e) => {
    e.preventDefault();
    history.push("/");
    dispatch(logout());
  };

  return <button id='logout' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
