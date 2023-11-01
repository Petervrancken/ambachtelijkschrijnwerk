// SVG imports"
import Timmerwerk from "../../public/timmer.svg";
import Zaag from "../../public/zaag.svg";
import Veiligheid from "../../public/veiligheid.svg";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Head from "next/head";

import axios from "axios";

//next imports
import Link from "next/link";

// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

export default function Restauratietimmerwerk() {
  return <>
    <Head>
      <title>Veiligheid in schrijnwerkerij | Ambachtelijkschrijnwerk.be</title>
      <link
        rel="canonical"
        href="https://ambachtelijkschrijnwerk.be/restauratie/veiligheid-schrijnwerkerij"
      />
      <meta
        name="description"
        content="Aangezien we een grote liefde hebben voor het vakmanschap van
          weleer, hebben we ons gespecialiseerd in het restaureren van antiek
          houtwerk."
      />
    </Head>
    <div className="backgroundTableTheme restauratie-blok">
      <div className="sloganTheme">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
          className="sloganText timmerwerken-h1"
        >
          Veiligheid in schrijnwerkerij
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1,
              },
            },
          }}
          className="infoRestauratie introductie-text"
        >
          Dak structuren en andere structurele elementen (bv. moerbalken) in
          monumenten of andere oude gebouwen zijn meestal gemaakt in eik.
          Hoewel hout een zeer duurzaam bouwmateriaal is, kan na jarenlange
          blootstelling aan weer en wind, of door aantasting van beestjes of
          slecht onderhoud restauratie van doen zijn.
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 2,
            },
          },
        }}
      ></motion.div>
    </div>
    <h2 className="introductie-titel titel-twee title-restauratie">
       Bekijk de veiligheid tijdens onze schrijnwerkerkij
    </h2>
    <div className="onderwerp-bottom flexxed bottom-restauratie align-flexxed">
      <motion.p
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 0,
            },
          },
        }}
        className="infoRestauratie darktext"
      >
        Platformen en loopbruggen om moeilijk bereikbare plaatsen toch gemakkelijk en veilig te kunnen bereiken kunnen we ook vervaardigen.

      </motion.p>
      <div className="usp usp-button-group">
        <div className="usp-group">
          <div>&#9989; 20 jaar ervaring</div>
          <div>&#9989; Wij gaan voor klantentevredenheid</div>
          <div className="lastusp">
            &#9989; Dé restauratie specialist in uw buurt
          </div>
        </div>
      </div>
      <div className="buttons-template">
        <h5>Wilt u graag meer weten over onze diensten?</h5>
        <div className="Button1">
          <a href="tel:0032495364587" className="uspbutton">
            Bel ons: 0495 36 45 87
          </a>
        </div>
        <div className="Button1">
          <a
            href="mailto:info@ambachtelijkschrijnwerk.be"
            className="uspbutton"
          >
            <span className="buttonmargin">
              Mail ons: info@ambachtelijkschrijnwerk.be
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="diensten-restauratie resto onderwerp-bottom flexxed bottom-restauratie timmerwerken-bottom">
    <div className="paragraph-box">
        <h2 className="project-titel">
          wij zorgen voor veiligheid tijdens onze schrijwerkerij
        </h2>
        <div className="paragraph-flex">
          <p className="paragraph-h2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
        </div>
      </div>
      <div className="afbeeldingen-box">
        <div
          key="afbeelding1"
          className="slide-afbeelding diensten-afbeeldingen"
        >
          <div className="swiper-afbeelding">
            <Link
              href="/restauratie/veiligheid-schrijnwerkerij/bereikbaarheid-1.jpg"
              legacyBehavior>
              <div title="klik en vergroot!">
                <Image
                  height={250}
                  width={250}
                  objectFit="cover"
                  src="/static/SmallPhoto/bereikbaarheid-1.jpg"
                  alt="duifhuis restauratie"
                />
              </div>
            </Link>
          </div>
        </div>
        <div
          key="afbeelding2"
          className="slide-afbeelding diensten-afbeeldingen"
        >
          <div className="swiper-afbeelding">
            <Link
              href="/restauratie/veiligheid-schrijnwerkerij/bereikbaarheid-2.jpg"
              legacyBehavior>
              <div title="klik en vergroot!">
                <Image
                  height={250}
                  width={250}
                  objectFit="cover"
                  src="/static/SmallPhoto/bereikbaarheid-2.jpg"
                  alt="restauratietimmerwerk duifhuis"
                />
              </div>
            </Link>
          </div>
        </div>
        <div
          key="afbeelding3"
          className="slide-afbeelding diensten-afbeeldingen"
        >
          <div className="swiper-afbeelding">
            <Link
              href="/restauratie/veiligheid-schrijnwerkerij/bereikbaarheid-3.jpg"
              legacyBehavior>
              <div title="klik en vergroot!">
                <Image
                  height={250}
                  width={250}
                  objectFit="cover"
                  src="/static/SmallPhoto/bereikbaarheid-3.jpg"
                  alt="duifhuis afwerking"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="background-diensten"></div>
  </>;
}
