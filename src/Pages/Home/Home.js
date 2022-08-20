import React from "react";
import CrauselImages from "../../Components/CrouselImages/CrauselImages";
import Testinomial from "../../Components/TestinomialCrousel/Testinomial";
import Mission from "./Mission";
import NewaLetter from "./NewaLetter";
import DonateComponent from "../../Components/Parallax/ DonateComponent";

function Home() {
  return (
    <div>
      <CrauselImages />
      <Mission />
      <div style={coustemStyle.video}>
        <iframe
          src="https://www.youtube.com/embed/SDowWf86Wic"
          title="YouTube video player"
          frameBorder='1'
          style={{borderRadius: '8px'}}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          
        ></iframe>
      </div>
      <NewaLetter />
      <DonateComponent />
      <Testinomial />
      {/* <Footer /> */}
    </div>
  );
}

const coustemStyle = {
  video: {
    textAlign: "center",
    // border: '1px solid red'
  },
};

export default Home;
