import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from "react-redux";
import LoginModal from '../Modals/LoginModal'
import SignupModal from '../Modals/SignupModal'
import './Nav.css'
import logo from '../../img/mySamplerLogo.png'
import InfoBox from '../Modals/InfoBox';
import Search from '../Search'


const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <nav>
      <div>
        <div id="nav-wrap">
          <img id="mysampler-logo" src={logo} alt="home" />
          <NavLink
            to="/home"
            exact={true}
            activeClassName="active"
            className="home-link"
          >
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
          <div>
            <Search />
          </div>
          <div>
            <InfoBox />
          </div>
          <div>
            <LogoutButton />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
