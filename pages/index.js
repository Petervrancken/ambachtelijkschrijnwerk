// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { motion } from "framer-motion";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";
import Head from "next/head";

// verander hier je URL endpoints
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000"; // local url

export default function Home(description) {
  return (
    <>
      <Head>
        <title>Ambachtelijk schrijnwerk | Ambachtelijkschrijnwerk.be</title>
        <link rel="canonical" href="https://ambachtelijkschrijnwerk.be/" />
        <meta
          name="description"
          content="Ambachtelijkschrijnwerk.be is ontstaan uit de samenwerking van twee
            gepassioneerde restauratieschrijnwerkers."
        />
      </Head>
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
            <h1 className="sloganText sloganh1">Ambachtelijk schrijnwerk</h1>
            <h2 className="sloganText sloganh2">
              Schrijnwerk in ere hersteld en klaar voor de toekomst!
            </h2>
            <p className="introductie-titel">Wie zijn we?</p>
            <p className="introductie-text">
              <p>
                Ambachtelijk Schrijnwerk BV is ontstaan uit de samenwerking van
                twee gepassioneerde schrijnwerkers: Anton Destrooper en Kristof
                Van Dooren. Door onze krachten en ervaring te bundelen zijn we
                klaar voor elk project in massief hout. Samen Hebben we meer dan
                20 jaar ervaring in zowel <a href="/restaurtie">restauratieschrijnwerk</a> en algemeen
                massief schrijnwerk. Al ons schrijnwerk wordt vervaardigd in ons
                eigen atelier!
              </p>
              <div className="usp">
                <div>&#9989; 20 jaar ervaring</div>
                <div>&#9989; Wij gaan voor klantentevredenheid</div>
                <div className="lastusp">
                  &#9989; Dé restauratie specialist in uw buurt
                </div>
                <a href="tel:0032495364587" className="Button1">
                  <div className="uspbutton">Bel ons: +32 495 36 45 87 </div>
                </a>
                <a
                  href="mailto:info@ambachtelijkschrijnwerk.be"
                  className="Button1"
                >
                  <div className="uspbutton">
                    Mail ons: info@ambachtelijkschrijnwerk.be
                  </div>
                </a>
              </div>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
