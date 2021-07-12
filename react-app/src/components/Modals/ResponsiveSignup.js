import React from "react";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
import SignUpForm from "../auth/SignUpForm";
import "./ResponsiveMenu.css";

function ResponsiveSignup({ showMenu, width, menu }) {
  return (
    <div className={`menu ${showMenu ? "show" : ""}`}>
      <div id="close-menu" onClick={menu}>
        <IconContext.Provider value={{ className: "close-icon" }}>
          <IoClose />
        </IconContext.Provider>
      </div>
      <SignUpForm menu={menu} width={width} />
    </div>
  );
}

export default ResponsiveSignup;
