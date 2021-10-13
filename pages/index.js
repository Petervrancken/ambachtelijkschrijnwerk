// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { motion } from "framer-motion";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

// verander hier je URL endpoints
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000"; // local url

export default function Home({ comments }) {
  return (
    <div className="backgroundTable">
      <div className="slogan">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.5,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <p className="sloganText">
            wij maken geschiedenis van onze toekomst!
          </p>
          <p className="introductie-titel">Wie zijn we?</p>
          <p className="introductie-text">
            Ambachtelijkschrijnwerk.be is ontstaan uit de samenwerking van twee
            gepassioneerde restauratieschrijnwerkers. Samen Hebben we meer dan
            20 jaar ervaring in restauratieschrijnwerk en algemeen massief
            schrijnwerk. In ons atelier zijn we goed uitgerust voor iedere job
            met massief hout. Samen hebben we meer dan 20 jaar ervaring in zowel
            restauratieschrijnwerk en algemeen massief schrijnwerk. In ons
            atelier zijn we goed uitgerust voor iedere job met massief hout.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
