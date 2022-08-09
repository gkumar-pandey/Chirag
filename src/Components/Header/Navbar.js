import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

function Navbar() {
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
      name: "video",
      link: "/video",
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
      <Stack
        direction="row"
        spacing={6}
        sx={{
          color: "white",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {navItem.map((item, idx) => {
          return (
            <Link to={item.link} style={customStyle.link}>
              <Button color="inherit">{item.name}</Button>
            </Link>
          );
        })}
      </Stack>
    </>
  );
}

const customStyle = {
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.6rem",
  },
};

export default Navbar;
