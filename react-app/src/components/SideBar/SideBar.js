import './SideBar.css'
import {AiFillProfile} from "react-icons/ai";
import {FaUserFriends} from "react-icons/fa";
import logo from '../../img/mySamplerLogo.png'
import React from 'react'
import {useSelector} from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import Home from "../Home"

function SideBar() {
  let mini = true;
  const sessionUser = useSelector((state) => state.session.user);
  const userName = sessionUser.username;

  const toggleSideBar = () => {
    if (mini) {

    }
  }

  return (
    <>
      <div
        id="sidebar"
        class="sidebar"
        onMouseOver={toggleSideBar}
        onMouseOut={toggleSideBar}
      >
        <NavLink to={`/profile/${userName}`}>
          <AiFillProfile />
          <span>Profile</span>{" "}
        </NavLink>
        <Link>
          <span>Samplers</span>{" "}
        </Link>
        <Link>
          <FaUserFriends />
          <span>Friends</span>{" "}
        </Link>
      </div>
      <div id='home'>
        <Home />
      </div>
    </>
  );
}

export default SideBar
