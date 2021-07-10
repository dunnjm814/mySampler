import './SideBar.css'
import {AiFillProfile} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import {IoMenu, IoClose} from "react-icons/io5"
import logo from '../../img/mySamplerLogo.png'
import React, {useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { NavLink} from 'react-router-dom'
import "react-dropdown/style.css";
import { fetchAllUserSamplers } from '../../store/sampler'
import {getFollowerList} from '../../store/friends'

function SideBar() {
  const dispatch = useDispatch()
  const [samplerDropDown, setDropDown] = useState()
  const [friendList, setFriendList] = useState()
  const [sideBar, setSideBar] = useState('')
  const [subMenuSampler, setSubMenuSampler] = useState('sub-menu-sampler')
  const [subMenuFriends, setSubMenuFriends] = useState('sub-menu-friends')
  const sessionUser = useSelector((state) => state.session.user);
  const userFriends = useSelector((state) => state.friends.userFollows);
  const userSamplers = useSelector((state) => state.sampler.userSamplers);

  const userId = sessionUser.id

  useEffect(() => {
    dispatch(fetchAllUserSamplers(userId));
    dispatch(getFollowerList({ user_id: userId }));
  }, [dispatch, userId])

  const openSidebar = () => {
    console.log('clicked!')
    if (!sideBar) {
      setSideBar("open");
    } else {
      setSideBar("");
      setSubMenuSampler("sub-menu-sampler");
      setSubMenuFriends("sub-menu-friends");
    }
  };
  const openSubMenuSampler = () => {
    if (sideBar) {
      if (subMenuSampler === "sub-menu-sampler") {
        setSubMenuSampler("sub-menu-sampler-open");
      } else {
        setSubMenuSampler("sub-menu-sampler");
      }
    }
  };
  const openSubMenuFriends = () => {
    if (sideBar) {
      if (subMenuFriends === "sub-menu-friends") {
        setSubMenuFriends("sub-menu-friends-open");
      } else {
        setSubMenuFriends("sub-menu-friends");
      }
    }
  };

  useEffect(() => {
    // this useEffect renders current user samplers under the sampler tab
    // in sidebar/mobile menu
    if (userSamplers) {
      setDropDown(
        userSamplers.map((sampler) => (
          <div
            key={`sampler-link-wrap-${sampler.id}`}
          >
            <NavLink
              className="sub-menu-link"
              key={`sampler-link-${sampler.id}`}
              to={`/sampler/${sampler.id}`}
              onClick={openSidebar}
            >
              {sampler.title}
            </NavLink>
          </div>
        ))
      );
    }
  }, [userSamplers])

  useEffect(() => {
    // this useEffect renders the users friends list in the sidebar / menu
    if (userFriends) {
      setFriendList(
        userFriends.map((user) => (
          <div key={`friend-link-wrap-${user.id}`}>
            <NavLink
              key={`friend-link-profile-${user.id}`}
              to={`/profile/${user.id}`}
              className="sub-menu-link"
              onClick={openSidebar}
            >
              {user.username}
            </NavLink>
          </div>
        ))
      );
    }
  },[userFriends])

  return (
    <div className="side-bar-wrap">
      <div className={`sidebar ${sideBar}`}>
        <div className="side-link" onClick={openSidebar}>
          <div className="side-icon">
            {sideBar === "" ?
              <IoMenu /> : <IoClose />
            }
            <span className="side-bar-label">Menu</span>
          </div>
        </div>
        <div className="side-link open-sub" onClick={openSubMenuSampler}>
          <div className="side-icon">
            <img
              className="side-bar-logo"
              src={logo}
              alt="logo"
              style={{ width: "1em", height: "1em" }}
            />
            <span>Samplers</span>
          </div>
        </div>
        <div className={`${subMenuSampler}`}>
          {userSamplers && samplerDropDown}
        </div>
        <NavLink
          to={`/profile/${userId}`}
          onClick={openSidebar}
          style={{ textDecoration: "none" }}
        >
          <div className="side-link">
            <div className="side-icon">
              <AiFillProfile />
              <span className="side-bar-label">Profile</span>
            </div>
          </div>
        </NavLink>
        <div className="side-link open-sub" onClick={openSubMenuFriends}>
          <div className="side-icon">
            <FaUserFriends />
            <span id="friend-span">Friends</span>
          </div>
        </div>
        <div className={`${subMenuFriends}`}>{userFriends && friendList}</div>
      </div>
    </div>
  );
}

export default SideBar
