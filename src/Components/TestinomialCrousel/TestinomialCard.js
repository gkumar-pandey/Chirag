import React from "react";
import { Avatar } from "@mui/material";
import avatarImg from "../../Assets/SocialMediaIcons/pic-3.png";
import './TestinomialCard.css'
function TestinomialCard() {
  return (
    <div className="testinomial-card-container" >
      <div className="avtar-about-container">
        <Avatar sx={{ height: '100px', width: '100px' }} src={avatarImg} />
        <div className="about-avatar">
          <p>Name</p>
          <p>Profession</p>
        </div>
      </div>
      <div className="feedback-text" >
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, vitae illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quae perspiciatis. Quam magnam, cumque similique vitae ducimus adipisci hic minus voluptatem quae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic veniam odit fugit accusantium eum ut, officiis magni, quia nulla totam exercitationem aperiam. </p>
      </div>
    </div>
  );
}

export default TestinomialCard;
