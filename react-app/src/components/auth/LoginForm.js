import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './LoginForm.css'


const LoginForm = ({setShowModal }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState('hidden')

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (user.errors) {
      setErrors(user.errors);
    }
    setShowModal(false);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }
  const toggle = () => {
    if (hidden === '') {
        setHidden('hidden')
    }
    setHidden('')
  }
  return (
    <form id="loginform" onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div id="email">
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div id="password">
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <div>
          <button type="submit">Login</button>
          <div onMouseOver={toggle} onMouseOut={toggle}>Demo?</div>
            Demo:
            <p>Login: demo@aa.io </p>
            <p>Password: password</p>
          </div>
        </div>
    </form>
  );
};

export default LoginForm
