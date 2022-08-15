import React from "react";

function Logo() {
  return <div style={CoustemStyle.logo}></div>;
}

const CoustemStyle = {
  logo: {
    height: "3rem",
    width: "100%",
    border: "1px solid red",
  },
};

export default Logo;
