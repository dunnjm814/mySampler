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

  useEffect(() => {
    if (userSamplers) {
      setDropDown(
        userSamplers.map((sampler) => (
          <div key={`sampler-link-wrap-${sampler.id}`} className="sub-menu-link">
            <NavLink
              key={`sampler-link-${sampler.id}`}
              to={`/sampler/${sampler.id}`}
            >
              {sampler.title}
            </NavLink>
          </div>
        ))
      );
    }
  }, [userSamplers])
  useEffect(() => {
    if (userFriends) {
      setFriendList(
        userFriends.map((user) => (
        <>
          {console.log('checking user inside dropdown', user)}
          <div key={`friend-link-wrap-${user.id}`} className="sub-menu-link">
            <NavLink
              key={`friend-link-profile-${user.id}`}
              to={`/profile/${user.id}`}
            >{user.username}</NavLink>
            </div>
            </>
        ))
      );
    }
  },[userFriends])
  const openSidebar = () => {
    if (!sideBar) {
      setSideBar('open')
    } else {
      setSideBar('')
      setSubMenuSampler('sub-menu-sampler')
      setSubMenuFriends('sub-menu-friends')
    }
  }
  const openSubMenuSampler = () => {
    if (subMenuSampler === 'sub-menu-sampler') {
      setSubMenuSampler('sub-menu-sampler-open')
    } else {
      setSubMenuSampler('sub-menu-sampler')
    }
  }
  const openSubMenuFriends = () => {
    if (subMenuFriends === 'sub-menu-friends') {
      setSubMenuFriends('sub-menu-friends-open')
    } else {
      setSubMenuFriends('sub-menu-friends')
    }
  }
  return (
    <>
      <div className={`sidebar ${sideBar}`}>
        <div className="side-link" onClick={openSidebar}>
          <div className="side-icon">
            <a>
              <BsLayoutTextSidebarReverse />
            </a>
          </div>
        </div>
        <div className="side-link open-sub" onClick={openSubMenuSampler}>
          <div className="side-icon">
            <a>
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
        <div className={`${subMenuSampler}`}>{userSamplers && samplerDropDown}</div>
        <NavLink to={`/profile/${userId}`}>
          <div className="side-link">
            <div className="side-icon">
              <AiFillProfile />
            </div>
            <span>Profile</span>
          </div>
        </NavLink>

        <div className="side-link open-sub" onClick={openSubMenuFriends}>
            <a>
            <div className="side-icon">
                <FaUserFriends />
                <span id='friend-span'>Friends</span>
              </div>
            </a>
        </div>
        <div className={`${subMenuFriends}`}>{userFriends && friendList}</div>
      </div>
    </>
  );
}

export default SideBar
