import React from "react";
import CrauselImages from "../../Components/CrouselImages/CrauselImages";
import Footer from "../../Components/Footer/Footer";
import Testinomial from "../../Components/TestinomialCrousel/Testinomial";
import Mission from "./Mission";
import NewaLetter from "./NewaLetter";

function Home() {
  return (
    <div>
      <CrauselImages />
      <Mission />
      <div style={coustemStyle.video}>
        <iframe
          src="https://www.youtube.com/embed/SDowWf86Wic"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <NewaLetter />
      <Testinomial />
      <Footer />
    </div>
  );
}

const coustemStyle = {
  video: {
    textAlign: "center",
    // border: "1px solid red",
  },
};

export default Home;
