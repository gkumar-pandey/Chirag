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
      <div style={coustemStyle.video} className='container' >
        <iframe
          src="https://www.youtube.com/embed/SDowWf86Wic"
          title="YouTube video player"
          frameBorder='0'
          style={{borderRadius: '8px'}}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          
        ></iframe>
      </div>
      <NewaLetter />
      <DonateComponent />
      <Testinomial />
    </div>
  );
}

const coustemStyle = {
  video: {
    textAlign: "center",
  },
};

export default Home;
