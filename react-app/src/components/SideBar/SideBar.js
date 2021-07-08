import './SideBar.css'
import {AiFillProfile} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import {BsLayoutTextSidebarReverse} from "react-icons/bs"
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
    if (userSamplers) {
      setDropDown(
        userSamplers.map((sampler) => (
          <div
            key={`sampler-link-wrap-${sampler.id}`}
            className="sub-menu-link"
          >
            {/* <a
              key={`sampler-link-${sampler.id}`}
              href={`/sampler/${sampler.id}`}
              onClick={openSidebar}
            >
              {sampler.title}
            </a> */}
            <NavLink
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
  }, [userSamplers, openSidebar])
  useEffect(() => {
    if (userFriends) {
      setFriendList(
        userFriends.map((user) => (
          <div key={`friend-link-wrap-${user.id}`} className="sub-menu-link">
            <NavLink
              key={`friend-link-profile-${user.id}`}
              to={`/profile/${user.id}`}
            >{user.username}</NavLink>
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
            <a href="#!">
              <BsLayoutTextSidebarReverse />
            </a>
          </div>
        </div>
        <div className="side-link open-sub" onClick={openSubMenuSampler}>
          <div className="side-icon">
            <a href="#!" >
              <img
                className="side-bar-logo"
                src={logo}
                alt="logo"
                style={{ width: "25px", height: "25px" }}
              />
              <span>Samplers</span>
            </a>
          </div>
        </div>
        <div className={`${subMenuSampler}`}>
          {userSamplers && samplerDropDown}
        </div>
        <NavLink to={`/profile/${userId}`} onClick={openSidebar}>
          <div className="side-link">
            <div className="side-icon">
              <AiFillProfile />
            </div>
            <span>Profile</span>
          </div>
        </NavLink>

        <div className="side-link open-sub" onClick={openSubMenuFriends}>
          <a href="#!">
            <div className="side-icon">
              <FaUserFriends />
              <span id="friend-span">Friends</span>
            </div>
          </a>
        </div>
        <div className={`${subMenuFriends}`}>{userFriends && friendList}</div>
      </div>
    </div>
  );
}

export default SideBar
