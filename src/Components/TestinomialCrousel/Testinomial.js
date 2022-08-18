import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import TestinomialCard from "./TestinomialCard";

function Testinomial() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <h2 className="heading">Testinomial</h2>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        style={{
          // border: "1px solid red",
          width: isMobile ? "100%" : "50%",
          padding: "5px",
        }}
      >
        <SwiperSlide>
          <TestinomialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestinomialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestinomialCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Testinomial;
