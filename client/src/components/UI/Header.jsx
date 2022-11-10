import React from "react";
import "../../styles/header.css";
import background from "../../assets/TestBackground.jpg";
import { SwipeableDrawer } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./NavDrawer";

function Header() {
  return (
    <>
      <header>
        <div className="menu">
          <NavDrawer />
        </div>
        <h1>A Cool Blog Site</h1>
      </header>
    </>
  );
}

export default Header;
