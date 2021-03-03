import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useDispatch, useSelector } from "react-redux";
import LoginModal from '../Modals/LoginModal'
import SignupModal from '../Modals/SignupModal'



const NavBar = ({ setAuthenticated }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const [showLinks, setShowLinks] = useState(false);

  function toggleShowAuth() {
    setShowLinks(!showLinks);
  }
  return (
    <nav>
      <div id="home-wrap">
        <img id="mysampler-logo" src={"/mySamplerLogo.png"} alt="home" />
        <NavLink to="/" exact={true} activeClassName="active">
          mySampler
        </NavLink>
      </div>
      {!sessionUser && (
        <div id="signlogin-wrap">
          <div>
            <LoginModal />
          </div>
          <div>
            <SignupModal />
          </div>
        </div>
      )}
      {sessionUser && (
        <div id="logout-wrap">
          <LogoutButton />
        </div>
      )}
      {/* <NavLink to="/login" exact={true} activeClassName="active">
        Login
      </NavLink>

      <NavLink to="/sign-up" exact={true} activeClassName="active">
        Sign Up
      </NavLink>

      <NavLink to="/users" exact={true} activeClassName="active">
        Users
      </NavLink> */}
    </nav>
  );
}

export default NavBar;
