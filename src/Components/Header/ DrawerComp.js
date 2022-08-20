import {
  Drawer,
  List,
  ListItemText,
  ListItem,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChiragLogo from "../../Assets/Images/Chirag-Logo.png";

function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const navItem = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Activity",
      link: "/activity",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "contirbution",
      link: "/contirbution",
    },
    {
      name: "our team",
      link: "/team",
    },
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];
  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { width: "50%", backgroundColor: "#162842" } }}
      >
        <List sx={{ marginTop: "4rem" }}>
          {navItem.map((item, idx) => {
            return (
              <ListItem key={idx} onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link
                    to={item.link}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "1.6rem",
                    }}
                  >
                    <Button
                      color="inherit"
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>
      <img
        src={ChiragLogo}
        style={{ height: "60px", weight: "60px", marginLeft: "30%" }}
      />
    </>
  );
}

export default DrawerComp;
