import React from "react";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
import LoginForm from "../auth/LoginForm";
import "./ResponsiveMenu.css";


function ResponsiveLogin({showMenu, width, menu}) {

  return (
    <div className={`menu ${showMenu ? "show" : ""}`}>
      <div id="close-menu" onClick={menu}>
        <IconContext.Provider value={{ className: "close-icon" }}>
          <IoClose />
        </IconContext.Provider>
      </div>
      <LoginForm menu={menu} width={width}/>
    </div>
  );
}

export default ResponsiveLogin
