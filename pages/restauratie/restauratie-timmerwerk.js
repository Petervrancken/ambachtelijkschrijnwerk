// SVG imports"
import Timmerwerk from "../../public/timmer.svg";
import Zaag from "../../public/zaag.svg";
import Veiligheid from "../../public/veiligheid.svg";
import Image from "next/image";
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
  return (
    <>
      <Head>
        <title>Restauratie van timmerwerk | Ambachtelijkschrijnwerk.be</title>
        <link
          rel="canonical"
          href="https://ambachtelijkschrijnwerk.be/restauratie/restauratie-timmerwerk"
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
            Restauratie van timmerwerk
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
        Bekijk onze projecten voor restauratie timmerwerken
      </h2>
      <div className="onderwerp-bottom flexxed bottom-restauratie">
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
          Zoals bij alle restauratiewerken trachten we zo veel mogelijk van de
          originele timmerwerken te behouden. We voeren de herstellingen uit met
          de aloude technieken zoals liplassen of zwaluwstaarten. Ook doen we
          herstellingen met moderne technieken zoals polymeer-chemisch en
          glasvezel.
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
            Restaurtatie van duifhuis te bokrijk
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
              <Link href="/restauratie/restauratie-timmerwerk/duifhuis-bokrijk-2.jpg">
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/duifhuis-bokrijk-2.jpg"
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
              <Link href="/restauratie/restauratie-timmerwerk/duifhuis-bokrijk.jpg">
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/duifhuis-bokrijk.jpg"
                    alt="restauratie timmerwerk duifhuis"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div
            key="afbeelding7"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratie-timmerwerk/duifhuis-bokrijk-3.jpg">
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/duifhuis-bokrijk-3.jpg"
                    alt="duifhuis vakwerk"
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
              <Link href="/restauratie/restauratie-timmerwerk/duifhuis-bokrijk-5.jpg">
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/duifhuis-bokrijk-5.jpg"
                    alt="duifhuis afwerking"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="diensten-restauratie diensten-restauratie-2 white-box-flexxed onderwerp-bottom flexxed bottom-restauratie timmerwerken-bottom">
        <div className="afbeeldingen-box">
          <div
            key="afbeelding4"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratie-timmerwerk/vakwerkherstel-bokrijk-2.jpg">
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/vakwerkherstel-bokrijk-2.jpg"
                    alt="steunbalk restauratie"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div
            key="afbeelding5"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratie-timmerwerk/vakwerkherstel-bokrijk.jpg">
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/vakwerkherstel-bokrijk.jpg"
                    alt="steunbalk geplaatst"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="paragraph-box white-box">
          <h2 className="project-title-white two-lines">
            Steunbalk in restauratie te bokrijk
          </h2>
          <div className="paragraph-flex paragraph-flex-white">
            <p className="paragraph-h2 paragraph-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      <div className="background-diensten"></div>
    </>
  );
}
