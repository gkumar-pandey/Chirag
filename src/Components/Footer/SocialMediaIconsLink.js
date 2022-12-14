import React from "react";
import socialMedia from "../../Data/Data";

function SocialMediaIconsLink() {
  return (
    <div className="footer">
      <div className="social-media-contianer">
        <p>We are on Social Media :)</p>
        {socialMedia.map((item, idx) => {
          return (
            <a key={idx} href={item.link} target="_blank_">
              <img className="social-media-icon" src={item.icon} />
            </a>
          );
        })}
      </div>
      <div className="copyright-container">
        <p>Copyright &#169; 2022 Chirag All Rights Reserved</p>
        <p>
          Developed By:~{" "}
          <a
            href="https://gautamkp.netlify.app/"
            style={{
              color: "#fff",
              fontSize: "1.2rem",
              textDecoration: "none",
            }}
          >
            Gautam..
          </a>
        </p>
      </div>
    </div>
  );
}

export default SocialMediaIconsLink;
