import React from "react";
import "../../styles/header.css";

import NavDrawer from "./NavDrawer";

function Header() {
  return (
    <header>
      <div className="menu">
        <NavDrawer />
      </div>
      <h1>Sawyer Gitzel</h1>
    </header>
  );
}

export default Header;
