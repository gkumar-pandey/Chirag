import React from "react";
import { padding, useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import "./DonateBanner.css";
import img15 from "../../Assets/Images/img15.jpg";
import donationImg from "../../Assets/Images/donation.png";
import Button from "../Button/Button";
function DonateComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="donate-container">
      <ParallaxBanner
        className="bannerBg"
        style={{
          aspectRatio: "2 / 1",
          width: isMobile ? "100%" : "60%",
          height: "",
        }}
        layers={[
          {
            image: img15,
            speed: -50,
          },
        ]}
      >
        <div className="donate-text-container" style={{ position: "absolute" }}>
          <img src={donationImg} style={coustemStyle.donationLogo} />
          <h1>EVEN SMALL CONTRIBUTIONS CREATE LARGE IMPACTS</h1>
          <Button btnName="DONATE NOW" />
        </div>
      </ParallaxBanner>
    </div>
  );
}

const coustemStyle = {
  bannerBg: {
    border: "1px solid red",
  },
  donationLogo: {
    height: "100px",
    padding: "0.4rem",
    margin:'1rem'
  },
};
export default DonateComponent;
