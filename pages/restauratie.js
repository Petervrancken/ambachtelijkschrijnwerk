// SVG imports"
import Timmerwerk from "../public/timmer.svg";
import Zaag from "../public/zaag.svg";
import Veiligheid from "../public/veiligheid.svg";
import Image from "next/image";
import { motion } from "framer-motion";

import axios from "axios";

//next imports
import Link from "next/link";

// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

export default function Restauratie() {
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
            restauratie
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
            Aangezien we een grote liefde hebben voor het vakmanschap van
            weleer, hebben we ons gespecialiseerd in het restaureren van antiek
            houtwerk. Zoals bij alle restauratiewerken trachten we zo veel
            mogelijk van de originele timmerwerken te behouden. We voeren de
            herstellingen uit met de aloude technieken zoals liplassen of
            zwaluwstaarten. Ook doen we herstellingen met moderne technieken
            zoals polymeerchemisch en glasvezel.
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
        >
          <div className="onderwerp">
            <Link href="/restauratietimmerwerk">
              <a title="naar timmerwerk">
                <div className="box">
                  <p className="onderwerp-titel">Restauratietimmerwerk</p>
                  <Timmerwerk className="onderwerp-icoon" />
                </div>
              </a>
            </Link>
            <Link href="/restauratietimmerwerk">
              <a title="naar timmerwerk">
                <div className="box">
                  <p className="onderwerp-titel">Restauratieschrijnwerk</p>
                  <Zaag className="onderwerp-icoon" />
                </div>
              </a>
            </Link>
            <Link href="/restauratietimmerwerk">
              <a title="naar timmerwerk">
                <div className="box">
                  <p className="onderwerp-titel">
                    Bereikbaarheid en veiligheid
                  </p>
                  <Veiligheid className="onderwerp-icoon" />
                </div>
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="onderwerp-bottom">
        <Link href="/restauratietimmerwerk">
          <a title="naar timmerwerk">
            <div className="box">
              <p className="onderwerp-titel">Restauratietimmerwerk</p>
              <Timmerwerk className="onderwerp-icoon" />
            </div>
          </a>
        </Link>
        <Link href="/restauratietimmerwerk">
          <a title="naar timmerwerk">
            <div className="box">
              <p className="onderwerp-titel">Restauratieschrijnwerk</p>
              <Zaag className="onderwerp-icoon" />
            </div>
          </a>
        </Link>
        <Link href="/restauratietimmerwerk">
          <a title="naar timmerwerk">
            <div className="box">
              <p className="onderwerp-titel">Bereikbaarheid en veiligheid</p>
              <Veiligheid className="onderwerp-icoon" />
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
