import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './LoginForm.css'


const LoginForm = ({setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  // const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [hidden, setHidden] = useState('hidden')

  const onLogin = async (e) => {
    e.preventDefault();

    const user = await dispatch(login(email, password));
    console.log(user)
    if (user.errors) {

      setErrors(user.errors);

    } else {
      console.log("hey im in the else")
      history.push("/home");
    }

  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login("demo@aa.io", "password"));
    if (user.errors) {
      setErrors(user.errors);
    } else {
      setShowModal(false);
      history.push("/home");
    }
  }


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // const toggle = () => {
  //   if (hidden === '') {
  //       setHidden('hidden')
  //   }
  //   setHidden('')
  // }
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
          <button type='button' id='demo' onClick={demoLogin}>demo</button>
        </div>
    </form>
  );
};

export default LoginForm
