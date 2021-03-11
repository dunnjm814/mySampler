import './SideBar.css'
import {AiFillProfile} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import {BsLayoutTextSidebarReverse} from "react-icons/bs"
import logo from '../../img/mySamplerLogo.png'
import React, {useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import "react-dropdown/style.css";
import {fetchAllUserSamplers} from '../../store/sampler'

function SideBar() {
  const dispatch = useDispatch()
  const [samplerDropDown, setDropDown] = useState()
  const [sideBar, setSideBar] = useState('')
  const [subMenu, setSubMenu] = useState('sub-menu')
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
  const openSidebar = () => {
    if (!sideBar) {
      setSideBar('open')
    } else {
      setSideBar('')
      setSubMenu('sub-menu')
    }
  }
  const openSubMenu = () => {
    if (subMenu === 'sub-menu') {
      setSubMenu('sub-menu-open')
    } else {
      setSubMenu('sub-menu')
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
        <div className="side-link open-sub" onClick={openSubMenu}>
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
        <div className={`${subMenu}`}>{userSamplers && samplerDropDown}</div>
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
