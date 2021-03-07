import './SideBar.css'
import {AiFillProfile} from "react-icons/ai";
import {FaUserFriends} from "react-icons/fa";
import logo from '../../img/mySamplerLogo.png'
import React, {useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {fetchAllUserSamplers} from '../../store/sampler'

function SideBar() {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const userName = sessionUser.username;
  const userId = sessionUser.id
  const userSamplers = useSelector((state) => state.sampler.userSamplers);
  useEffect(() => {

    dispatch(fetchAllUserSamplers(userId));

    console.log('state after dispatch', userSamplers)
  }, [])


  return (
    <>
      <div className="sidebar">
        <div className="side-link">
          <div className="side-icon">
            <img
              src={logo}
              alt="logo"
              style={{ width: "25px", height: "25px" }}
            />
          </div>
          {userSamplers && (
            <Dropdown options={userSamplers?.samplerList?.title} />
          )}
            {(console.log(userSamplers))}
        </div>
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
      <div id="home"></div>
    </>
  );
}

export default SideBar
