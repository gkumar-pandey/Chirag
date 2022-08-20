import { useTheme } from "@mui/system";
import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import DrawerComp from "./ DrawerComp";
import Logo from "./Logo";
function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#162842", padding: "5px" }}
      >
        <Toolbar style={{ justifyContent: isMobile ? "start" : "center" }}>
          {isMobile ? <DrawerComp /> : <Navbar />}
        </Toolbar>
      </AppBar>
      <Logo />
    </>
  );
}

export default Header;
