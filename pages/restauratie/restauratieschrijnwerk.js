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

export default function Restauratieschrijnwerk() {
  return (
    <>
      <Head>
        <title>Restauratie van schrijnwerk | Ambachtelijkschrijnwerk.be</title>
        <link
          rel="canonical"
          href="https://ambachtelijkschrijnwerk.be/restauratie/restauratieschrijnwerk"
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
            Restauratie van schrijnwerk
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
            Dit gaat van ramen en deuren tot trappen en ander interieur
            schrijnwerk.
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
        Bekijk onze projecten voor restauratieschrijnwerk
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
          We streven steeds na zo veel mogelijk van het originele schrijnwerk te
          behouden, enkel delen die niet meer gered kunnen worden volgens de
          regels van de kunst geheel of gedeeltelijk vervangen.
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
        <h2 className="project-titel">Restaurtatieschrijnwerk antieke trap</h2>
        <div className="afbeeldingen-box">
          <div
            key="afbeelding1"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratieschrijnwerk/antieke-trap.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/antieke-trap.jpg"
                    alt="antieke trap plaatsen"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div
            key="afbeelding2"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratieschrijnwerk/antieke-trap-2.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/antieke-trap-2.jpg"
                    alt="antieke trap verwijderen"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div
            key="afbeelding7"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratieschrijnwerk/antieke-trap-3.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/antieke-trap-3.jpg"
                    alt="antieke trap atelier"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div
            key="afbeelding3"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratieschrijnwerk/antieke-trap-4.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/antieke-trap-4.jpg"
                    alt="antieke trap"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="diensten-restauratie diensten-restauratie-2 onderwerp-bottom flexxed bottom-restauratie timmerwerken-bottom">
        <div className="afbeeldingen-box">
          <div
            key="afbeelding4"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratieschrijnwerk/den-wolsack-2.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/den-wolsack-2.jpg"
                    alt="traprestauraties"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div
            key="afbeelding5"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratieschrijnwerk/den-wolsack-1.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/den-wolsack-1.jpg"
                    alt="traprestauratie"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <h2 className="project-title-white two-lines">Restaurtatieschrijnwerk den Wolsack</h2>
      </div>
      <div className="diensten-restauratie resto onderwerp-bottom flexxed bottom-restauratie timmerwerken-bottom">
        <h2 className="project-titel">Restaurtatieschrijnwerk van waaiers</h2>
        <div className="afbeeldingen-box">
          <div
            key="afbeelding1"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratieschrijnwerk/waaier.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/waaier.jpg"
                    alt="restauratieschrijnwer waaier"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div
            key="afbeelding2"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratieschrijnwerk/waaier-2.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/waaier-2.jpg"
                    alt="restauratie waaiers"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div
            key="afbeelding7"
            className="slide-afbeelding diensten-afbeeldingen"
          >
            <div className="swiper-afbeelding">
              <Link href="/restauratie/restauratieschrijnwerk/waaier-3.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    objectFit="cover"
                    src="/static/SmallPhoto/waaier-3.jpg"
                    alt="restauratie waaier"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="background-diensten"></div>
    </>
  );
}
