import React from "react";
import socialMedia from "../../Data/Data";

function SocialMediaIconsLink() {
  return (
    <>
      <div className="social-media-contianer">
        <p>We are on Social Media :)</p>
        {socialMedia.map((item, idx) => {
          return (
            <a href={item.link} target="_blank_">
              <img className="social-media-icon" src={item.icon} />
            </a>
          );
        })}
      </div>
      <div className="copyright-container">
        <p>Copyright &#169; 2022 Chirag All Rights Reserved</p>
        <p>Developed and Maintained By:~ <a href="">Gautam..</a></p>
      </div>
    </>
  );
}

export default SocialMediaIconsLink;
