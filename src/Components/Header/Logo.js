import React from "react";
import diyaLogo from "../../Assets/Images/diya.png";
import "./Banner.css";

function Logo() {

  return (
    <div className="banner-container">
      <img src={diyaLogo} />
      <div className="logoText">
        <p className="logo">CHIRAG</p>

        <div className="moving-text">
          <marquee behavior="ALTERNATE" scrollamount="6">
            <p>A Step Toward Literate India</p>
          </marquee>
        </div>
      </div>
      <img src={diyaLogo} />
    </div>
  );
}

export default Logo;
