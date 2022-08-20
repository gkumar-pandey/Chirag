import React from "react";
import "./Footer.css";
import map from "../../Assets/SocialMediaIcons/map.png";

function AddressLocation() {
  return (
    <div className="container">
      <div id="address-container">
        <div>
          <div className="map-icon-container">
            <div>
              <img className="map-icon" src={map} />
              <h3 className="heading" >Find Us</h3>
            </div>
          </div>
          <div className="location">
            Nalanda College of Engineering , Chandi - Jalalpur road,Gokhulpur,
            Bihar - 803108.
          </div>
        </div>
        <div className="google-map-container fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.513461946181!2d85.40884911544636!3d25.32054573289783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29191e59bf919%3A0xa0f1313bf194a0bd!2sNalanda%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1660845250500!5m2!1sen!2sin"
            className="address-map"
            loading="lazy"
            frameBorder='1'
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AddressLocation;
