import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoMenu, IoClose } from "react-icons/io5";
import "./ResponsiveMenu.css"



function ResponsiveMenu() {

  const [showMenu, setShowMenu] = useState(false);

  function menu() {
    setShowMenu(showMenu => !showMenu)
  }

  return (
    <>
        <div id="responsive-menu">
          <div id="res-menu-button" onClick={menu}>
            <IconContext.Provider value={{ className: "ham-icon" }}>
              <IoMenu />
            </IconContext.Provider>
          </div>
        </div>
        <div className={`menu ${showMenu ? "show" : ""}`} >
          <div id="close-menu" onClick={menu}>
            <IconContext.Provider value={{ className: "close-icon" }}>
              <IoClose />
            </IconContext.Provider>
          </div>
          <div id="un-auth-menu"></div>
          <div id="auth-menu"></div>
        </div>

    </>
  );
}

export default ResponsiveMenu;
