import React from "react";
import CrauselImages from "../../Components/CrouselImages/CrauselImages";
import Mission from "./Mission";

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
