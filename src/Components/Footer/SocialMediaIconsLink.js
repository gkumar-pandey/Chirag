import React from "react";
import fbIcon from "../../Assets/SocialMediaIcons/facebook.png";
import instaIcon from "../../Assets/SocialMediaIcons/instagram.png";
import linkedinIcon from "../../Assets/SocialMediaIcons/linkedin.png";
import twitterIcon from "../../Assets/SocialMediaIcons/twitter.png";
import youtube from "../../Assets/SocialMediaIcons/youtube.png";

const socialMedia = [
  {
    icon: fbIcon,
    link: "",
  },
  {
    icon: instaIcon,
    link: "",
  },
  {
    icon: linkedinIcon,
    link: "",
  },
  {
    icon: twitterIcon,
    link: "",
  },
  {
    icon: youtube,
    link: "",
  },
];

function SocialMediaIconsLink() {
  return (
    <>
      <div className="social-meida-contianer">
        <p>We are on Social Media </p>
        {socialMedia.map((item, idx) => {
          return (
            <a href={item.link}>
              <img src={item.icon} />
            </a>
          );
        })}
      </div>
    </>
  );
}

export default SocialMediaIconsLink;
