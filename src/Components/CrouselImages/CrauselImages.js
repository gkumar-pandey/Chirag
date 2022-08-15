import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import img1 from "../../Assets/Images/img1.jpg";
import img3 from "../../Assets/Images/img3.jpg";
import img4 from "../../Assets/Images/img4.jpg";
import img5 from "../../Assets/Images/img5.jpg";
import img6 from "../../Assets/Images/img6.jpg";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

function CrauselImages() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const photoForSlider = [img1, img3, img4, img5, img6];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{ height: isMobile ? "400px" : "600px" }}
      >
        {photoForSlider.map((img) => {
          return (
            <SwiperSlide style={style.slide}>
              <img src={img} style={style.img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const style = {
  img: {
    height: "100%",
    width: "100%",
  },
};

export default CrauselImages;
