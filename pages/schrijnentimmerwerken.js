// SVG imports"
import Image from "next/image";
import Timmerwerk from "../public/timmer.svg";
import Zaag from "../public/zaag.svg";
import Veiligheid from "../public/veiligheid.svg";
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

export default function schrijnentimmerwerken(schrijnProps) {
  return (
    <>
    <Head>
      <title>Nieuwe schrijn- en timmerwerken | Ambachtelijkschrijnwerk.be</title>
      <link rel="canonical" href="https://ambachtelijkschrijnwerk.be/schrijnentimmerwerken" />
      <meta name="description" content="Wij maken ons massief schrijnwerk met oog op duurzaamheid en
            esthetiek. We zijn ook gespecialiseerd in het maken van replica’s
            van bestaand schrijn- of timmerwerk."/>
    </Head>
      <div className="backgroundTableTheme">
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
            className="sloganText"
          >
            Nieuwe schrijn en timmerwerken
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
            className="infoRestauratie"
          >
            Wij maken ons massief schrijnwerk met oog op duurzaamheid en
            esthetiek. We zijn ook gespecialiseerd in het maken van replica’s
            van bestaand schrijn- of timmerwerk.
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
                delay: 1.5,
              },
            },
          }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            slidesPerGroup={1}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              1500: {
                slidesPerView: 4,
              },
              1366: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
              10: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide key="afbeelding1" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/schrijnentimmerwerken-01.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/schrijnentimmerwerken-01.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding2" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/schrijnentimmerwerken-02.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/schrijnentimmerwerken-02.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding3" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/schrijnentimmerwerken-03.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/schrijnentimmerwerken-03.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding4" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/schrijnentimmerwerken-04.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/schrijnentimmerwerken-04.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding5" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/schrijnentimmerwerken-05.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/schrijnentimmerwerken-05.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding6" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/schrijnentimmerwerken-06.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/schrijnentimmerwerken-06.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding7" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/schrijnentimmerwerken-07.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/schrijnentimmerwerken-07.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
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
        >
        </motion.div>
      </div>
      <div className="onderwerp-bottom">
        <Link href="/restauratietimmerwerk">
          <a title="naar timmerwerk">
            <div className="box">
              <p className="onderwerp-titel">Restauratie van timmerwerk </p>
              <Timmerwerk className="onderwerp-icoon" />
              <p className="swiper-comment">
                Dak structuren en andere structurele elementen (bv. moerbalken)
                in monumenten of andere oude gebouwen zijn meestal gemaakt in
                eik. Hoewel hout een zeer duurzaam bouwmateriaal is, kan na
                jarenlange blootstelling aan weer en wind, of door aantasting
                van beestjes of slecht onderhoud restauratie van ...{" "}
                <span className="greentext">
                  Lees hier meer over resauratie timmerwerk
                </span>
              </p>
            </div>
          </a>
        </Link>
        <Link href="/restauratieschrijnwerk">
          <a title="naar timmerwerk">
            <div className="box">
              <p className="onderwerp-titel">Restauratie van schrijnwerk </p>
              <Zaag className="onderwerp-icoon" />
              <p className="swiper-comment">
                We streven steeds na zo veel mogelijk van het originele
                schrijnwerk te behouden, enkel delen die niet meer gered kunnen
                worden volgens de regels van de kunst geheel of gedeeltelijk
                vervangen. <span className="greentext">
                  Lees hier meer over resauratie schrijnwerk
                </span>
              </p>
            </div>
          </a>
        </Link>
        <Link href="/veiligheid">
          <a title="naar timmerwerk">
            <div className="box">
              <p className="onderwerp-titel">Bereikbaarheid en veiligheid</p>
              <Veiligheid className="onderwerp-icoon" />
              <p className="swiper-comment">
                Platformen en loopbruggen om moeilijk bereikbare plaatsen toch
                gemakkelijk en veilig te kunnen bereiken kunnen door ons
                geplaatst worden. Deze structuren dienen om een beter onderhoud
                te kunnen doen van de gebouwen. <span className="greentext">
                  Lees hier meer over veiligheid
                </span>
              </p>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
