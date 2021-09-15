// SVG imports"
import Image from "next/image";
import Timmerwerk from "../public/timmer.svg";
import Zaag from "../public/zaag.svg";
import Veiligheid from "../public/veiligheid.svg";
import { motion } from "framer-motion";

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
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
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
                  delay: 0.5,
                },
              },
            }}
            className="sloganText"
          >
            schrijn en timmerwerken
          </motion.p>
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
          <div className="onderwerp">
            <div className="box">
              <p className="onderwerp-titel">timmerwerken</p>
              <Timmerwerk className="onderwerp-icoon" />
              <p className="swiper-comment">
                Wij maken nieuwe dakgebinten, structuren voor dakkapellen en
                torens.
              </p>
            </div>
            <div className="box">
              <p className="onderwerp-titel">buiten schrijnwerk</p>
              <Zaag className="onderwerp-icoon" />
              <p className="swiper-comment">
                Wij vervaardigen oerdegelijke tuinpoorten, deuren, schuttingen
                in duurzame houtsoort naar keuze zoals padoek, afzelia of eik.
                Klanten mogen bij ons steeds eigen ontwerpen insturen.
              </p>
            </div>
            <div className="box">
              <p className="onderwerp-titel">binnen schrijnwerk</p>
              <Veiligheid className="onderwerp-icoon" />
              <p className="swiper-comment">
                Je kan bij ons zijn voor trappen, massieve binnendeuren, op maat
                gemaakte meubels…
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="onderwerp-bottom">
        <div className="box">
          <p className="onderwerp-titel">timmerwerken</p>
          <Timmerwerk className="onderwerp-icoon" />
          <p className="swiper-comment">
            Wij maken nieuwe dakgebinten, structuren voor dakkapellen en torens.
          </p>
        </div>
        <div className="box">
          <p className="onderwerp-titel">buiten schrijnwerk</p>
          <Zaag className="onderwerp-icoon" />
          <p className="swiper-comment">
            Wij vervaardigen oerdegelijke tuinpoorten, deuren, schuttingen in
            duurzame houtsoort naar keuze zoals padoek, afzelia of eik. Klanten
            mogen bij ons steeds eigen ontwerpen insturen.
          </p>
        </div>
        <div className="box">
          <p className="onderwerp-titel">binnen schrijnwerk</p>
          <Veiligheid className="onderwerp-icoon" />
          <p className="swiper-comment">
            Je kan bij ons zijn voor trappen, massieve binnendeuren, op maat
            gemaakte meubels…
          </p>
        </div>
      </div>
    </>
  );
}
