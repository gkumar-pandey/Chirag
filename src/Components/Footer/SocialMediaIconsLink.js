import React from "react";
import fbIcon from "../../Assets/SocialMediaIcons/facebook.png";
import instaIcon from "../../Assets/SocialMediaIcons/instagram.png";
import linkedinIcon from "../../Assets/SocialMediaIcons/linkedin.png";
import twitterIcon from "../../Assets/SocialMediaIcons/twitter.png";
import youtube from "../../Assets/SocialMediaIcons/youtube.png";

const socialMedia = [
  {
    icon: fbIcon,
    link: "https://www.facebook.com/ncechirag/",
  },
  {
    icon: instaIcon,
    link: "",
  },
  {
    icon: linkedinIcon,
    link: "https://www.linkedin.com/company/chirag-an-initiative-of-nceians/about/?viewAsMember=true",
  },
  {
    icon: twitterIcon,
    link: "https://twitter.com/ncechirag",
  },
  {
    icon: youtube,
    link: "https://www.youtube.com/channel/UCaIHyPCg1q-DwZ46AM48H1w",
  },
];

function SocialMediaIconsLink() {
  return (
    <>
      <div className="social-media-contianer">
        <p>We are on Social Media :</p>
        {socialMedia.map((item, idx) => {
          return (
            <a href={item.link} target='_blank_' >
              <img className="social-media-icon" src={item.icon} />
            </a>
          );
        })}
      </div>
    </>
  );
}

export default SocialMediaIconsLink;
