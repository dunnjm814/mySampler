import './SideBar.css'
import {AiFillProfile} from "react-icons/ai";
import {FaUserFriends} from "react-icons/fa";
import logo from '../../img/mySamplerLogo.png'
import React, {useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import "react-dropdown/style.css";
import {fetchAllUserSamplers} from '../../store/sampler'

function SideBar() {
  const dispatch = useDispatch()
  const [samplerDropDown, setDropDown] = useState()
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id
  const userSamplers = useSelector((state) => state.sampler.userSamplers);

  useEffect(() => {
    dispatch(fetchAllUserSamplers(userId));
  }, [dispatch, userId])

  useEffect(() => {
    if (userSamplers) {
      setDropDown(
        userSamplers.map((sampler) => (
          <NavLink to={`/sampler/${sampler.id}`}>{sampler.title}</NavLink>
        ))
      );
    }
  },[userSamplers])
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
          <div>
            {userSamplers && (
              samplerDropDown
            )}
          </div>
        </div>
        <NavLink to={`/profile/${userId}`}>
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
      
    </>
  );
}

export default SideBar
