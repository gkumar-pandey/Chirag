import React from "react";
import "./Banner.css";
import candle from "../../Assets/Images/candle.png";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

function Logo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="banner-container">
      <div className="logoText">
        <p className="logo">CHIRAG</p>

        <div className="moving-text">
          <marquee behavior="ALTERNATE" scrollamount={isMobile ? "0" : "6"}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={candle}
                style={{ height: "30px", width: "30px", margin: "0 10px" }}
              />
              <p>A Step Toward Literate India</p>
              <img
                src={candle}
                style={{ height: "30px", width: "30px", margin: "0 10px" }}
              />
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Logo;
