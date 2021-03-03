import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = async (e) => {
    await dispatch(logout());
    setAuthenticated(false);
    return history.push("/");
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
