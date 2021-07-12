import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import './auth.css'


const LoginForm = ({setShowModal, menu, width }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onLogin = async (e) => {
    e.preventDefault();

    const user = await dispatch(login(email, password));
    console.log(user)
    if (user.errors) {
      setErrors(user.errors);
    } else {
      history.push("/home");
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login("demo@aa.io", "password"));
    if (user.errors) {
      setErrors(user.errors);
    } else {
      if (width < 1000) {
        menu()
      } else {
        setShowModal(false);
      }
      history.push("/home");
    }
  }


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

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
          onChange={updatePassword}/>
        </div>
        <div id='buttons-wrap'>
          <button type="submit" id='log-in'>Login</button>
          <button type='button' id='demo' onClick={demoLogin}>Demo</button>
        </div>
    </form>
  );
};

export default LoginForm
