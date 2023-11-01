//next imports
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import axios from "axios";
// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

export default function Treecycle(treeProps) {
  return <>
  <Head>
    <title>Treecycle | Ambachtelijkschrijnwerk.be</title>
    <link rel="canonical" href="https://ambachtelijkschrijnwerk.be/treecycle" />
    <meta name="description" content="‘Save a tree’ betekent bij de meeste bedrijven het zo min mogelijk
          afdrukken op papier. Bij Ambachtelijkschrijnwerk.be interpreteren we
          dit op een andere manier."/>
  </Head>
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
          treecycle
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
          ‘Save a tree’ betekent bij de meeste bedrijven het zo min mogelijk
          afdrukken op papier. Bij Ambachtelijkschrijnwerk.be interpreteren we
          dit op een andere manier. Het resthout uit onze schrijnwerkerij en
          recuperatiehout uit de restauratie wordt bij ons nieuw leven
          ingeblazen door ons zijprojectje Treecycle. Één keer per maand
          houden we een ‘restjesdag’ waarbij we onze ideeën de vrije loop
          laten gaan. We gaan dus creatief aan de slag met onze restjes en
          maken hier iets moois van.De resultaten van de restjesdagen vindt je
          in onze shop.
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
              <Link href="/fotos-static/treecycle-01.jpg" legacyBehavior>
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/static/SmallPhoto/treecycle-01.jpg"
                    alt="Don't forget your alt text"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding2" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-02.jpg" legacyBehavior>
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/static/SmallPhoto/treecycle-02.jpg"
                    alt="Don't forget your alt text"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding3" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-03.jpg" legacyBehavior>
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/static/SmallPhoto/treecycle-03.jpg"
                    alt="Don't forget your alt text"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding4" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-04.jpg" legacyBehavior>
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/static/SmallPhoto/treecycle-04.jpg"
                    alt="Don't forget your alt text"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding5" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-05.jpg" legacyBehavior>
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/static/SmallPhoto/treecycle-05.jpg"
                    alt="Don't forget your alt text"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding6" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-06.jpg" legacyBehavior>
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/static/SmallPhoto/treecycle-06.jpg"
                    alt="Don't forget your alt text"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding7" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-07.jpg" legacyBehavior>
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/static/SmallPhoto/treecycle-07.jpg"
                    alt="Don't forget your alt text"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding8" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-08.jpg" legacyBehavior>
                <div title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/static/SmallPhoto/treecycle-08.jpg"
                    alt="Don't forget your alt text"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  </>;
}
