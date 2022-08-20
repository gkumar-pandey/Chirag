import React from "react";
import news1 from "../../Assets/Images/news1.jpeg";
import news2 from "../../Assets/Images/news2.jpg";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

function NewaLetter() {
  const NewsPic = [news1, news2];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="container">
      <h2 className="heading">News</h2>
      <div style={{ padding: "0.5rem" }}>
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
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          style={{
            height: isMobile ? "400px" : "500px",
            width: isMobile ? "100%" : "50%",
            padding:'2px',
            border: "2px solid #E04D01",
            borderRadius: "5px",
          }}
        >
          {NewsPic.map((img) => {
            return (
              <SwiperSlide style={{ borderRadius: "10px" }}>
                <img src={img} style={{ height: "100%", width: "100%" }} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

const CoustemStyle = {
  sliderContianer: {},
};

export default NewaLetter;
