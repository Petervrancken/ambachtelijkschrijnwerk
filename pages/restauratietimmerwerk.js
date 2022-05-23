// SVG imports"
import Timmerwerk from "../public/timmer.svg";
import Zaag from "../public/zaag.svg";
import Veiligheid from "../public/veiligheid.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Iframe from "react-iframe";

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
          href="https://ambachtelijkschrijnwerk.be/restauratietimmerwerk"
        />
        <meta
          name="description"
          content="Aangezien we een grote liefde hebben voor het vakmanschap van
            weleer, hebben we ons gespecialiseerd in het restaureren van antiek
            houtwerk."
        />
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
            className="infoRestauratie"
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
            // elke foto uitprinten met juiste fotonaam in zijn path
            className="mySwiper"
          >
            <SwiperSlide key="afbeelding1" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/restauratie-afbeelding1.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/restauratie-afbeelding1.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding2" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/restauratie-afbeelding2.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/restauratie-afbeelding2.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding3" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/restauratie-afbeelding3.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/restauratie-afbeelding3.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding4" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/restauratie-afbeelding4.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/restauratie-afbeelding4.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding5" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/restauratie-afbeelding5.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/restauratie-afbeelding5.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding6" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/restauratie-afbeelding6.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/restauratie-afbeelding6.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding7" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/restauratie-afbeelding7.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/restauratie-afbeelding7.jpg"
                      alt="Don't forget your alt text"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide key="afbeelding8" className="slide-afbeelding">
              <div className="swiper-afbeelding">
                <Link href="/fotos-static/restauratie-afbeelding8.jpg">
                  <a title="klik en vergroot!">
                    <Image
                      height={250}
                      width={250}
                      src="/static/SmallPhoto/restauratie-afbeelding8.jpg"
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
        ></motion.div>
      </div>
      <div className="onderwerp-bottom flexxed">
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
      </div>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.1092127115969!2d4.641672310513736!3d51.149581665424726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3fd9337827c4f%3A0xe87041190090591!2sGrote%20Steenweg%20105%2C%202560%20Nijlen!5e0!3m2!1sen!2sbe!4v1653338064563!5m2!1sen!2sbe"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></Iframe>
    </>
  );
}
