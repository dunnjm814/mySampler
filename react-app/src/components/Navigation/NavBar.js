import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from "react-redux";
import LoginModal from '../Modals/LoginModal'
import SignupModal from '../Modals/SignupModal'
import './Nav.css'
import logo from '../../img/mySamplerLogo.png'


const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  console.log(sessionUser)
  return (
    <nav>
      <div >
        <div id="nav-wrap">
        <img id="mysampler-logo" src={logo} alt="home" />
        <NavLink to="/" exact={true} activeClassName="active" className='home-link'>
          mySampler
        </NavLink>
        </div>
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
    </nav>
  );
}

export default NavBar;
