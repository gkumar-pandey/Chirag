import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import ChiragLogo from "../../Assets/Images/Chirag-Logo.png";

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
      name: "contribution",
      link: "/contribution",
    },
    {
      name: "Our Team",
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
      <Stack
        direction="row"
        spacing={6}
        sx={{
          color: "white",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <img src={ChiragLogo} style={{ height: "50px", weight: "50px" }} />
        {navItem.map((item, idx) => {
          return (
            <Link key={idx} to={item.link} style={customStyle.link}>
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
