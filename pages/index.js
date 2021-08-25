// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

// verander hier je URL endpoints
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000"; // local url

export default function Home({ comments }) {
  return (
    <div className="backgroundTable">
      <div className="slogan">
        <p className="sloganText">wij maken geschiedenis van onze toekomst!</p>
      </div>
    </div>
  );
}
