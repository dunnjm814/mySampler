import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IconContext } from "react-icons";
import { IoMenu } from "react-icons/io5";



function ResponsiveMenu() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div id="responsive-menu">
      <IconContext.Provider value={{ className: "ham-icon" }}>
        <IoMenu />
      </IconContext.Provider>
    </div>
  );
}

export default ResponsiveMenu;
