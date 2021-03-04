import './SideBar.css'
import {AiFillProfile} from "react-icons/ai";
import {FaUserFriends} from "react-icons/fa";
import logo from '../../img/mySamplerLogo.png'
import React from 'react'
import {useSelector} from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import Home from "../Home"

function SideBar() {

  const sessionUser = useSelector((state) => state.session.user);
  const userName = sessionUser.username;

  return (
    <>
      <div
        className="sidebar"
      >
        <Link>
          <div className="side-link">
            <div className="side-icon">
              <img
                src={logo}
                alt="logo"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <span>Samplers</span>{" "}
          </div>
        </Link>
        <NavLink to={`/profile/${userName}`}>
          <div className="side-link">
            <div className="side-icon">
              <AiFillProfile />
            </div>
            <span>Profile</span>{" "}
          </div>
        </NavLink>

        <Link>
          <div className="side-link">
            <div className="side-icon">
              <FaUserFriends />
            </div>
            <span>Friends</span>{" "}
          </div>
        </Link>
      </div>
      <div id="home">
        <Home />
      </div>
    </>
  );
}

export default SideBar
