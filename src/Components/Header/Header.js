import { useTheme } from "@mui/system";
import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import DrawerComp from "./ DrawerComp";
function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: isMobile ?'start': 'center' }}>
          {isMobile ? <DrawerComp /> : <Navbar />}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
