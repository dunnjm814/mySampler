import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from "../../store/session";
import './signup.css'


const SignUpForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await dispatch(signUp(username, email, password));
      if (user.errors) {
        setErrors([...user.errors]);
      }
    } else {
      setErrors(["Please confirm password"]);
    }
    setShowModal(false);
    history.push("/home");
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };


  return (
    <form onSubmit={onSignUp}>
      <div>
        <ul>
          {errors.map((error, i) => (
            <li key={i} style={{ color: "red" }}>
              {error}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          placeholder="Username"
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <input
          placeholder="Email"
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <input
          placeholder="Confirm Password"
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit" id='signup'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
