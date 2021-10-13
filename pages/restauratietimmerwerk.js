//next imports
import Timmerwerk from "../public/timmer.svg";
import Zaag from "../public/zaag.svg";
import Veiligheid from "../public/veiligheid.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import axios from "axios";
// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

export default function Restauratietimmerwerk() {
  return (
    <>
      <div className="backgroundTableTheme">
        <div className="icon-box-timmerwerk">
          <div className="icon-field">
            <Link href="/restauratietimmerwerk">
              <a title="timmerwerk foto's">
                <Timmerwerk className="onderwerp-icoon" />
              </a>
            </Link>
          </div>
          <div className="icon-field">
            <Link href="/restauratietimmerwerk">
              <a title="schrijnwerk foto's">
                <Zaag className="onderwerp-icoon" />
              </a>
            </Link>
          </div>
          <div className="icon-field">
            <Link href="/restauratietimmerwerk">
              <a title="veiligheid foto's">
                <Veiligheid className="onderwerp-icoon" />
              </a>
            </Link>
          </div>
        </div>
        <h1 className="onderwerp-titel">Restauratietimmerwerk</h1>
      </div>
    </>
  );
}
