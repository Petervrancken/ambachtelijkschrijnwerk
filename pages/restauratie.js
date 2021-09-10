// SVG imports"
import Timmerwerk from "../public/timmer.svg";
import Zaag from "../public/zaag.svg";
import Veiligheid from "../public/veiligheid.svg";
import Image from "next/image";

import axios from "axios";

//next imports
import Link from "next/link";

// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

//Verander hier je URL vergeet niet op deze pagina ook je foto url aan te passen
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000"; // local url

export default function Restauratie() {
  return (
    <>
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">restauratie</p>
          <p className="infoRestauratie">
            Aangezien we een grote liefde hebben voor het vakmanschap van
            weleer, hebben we ons gespecialiseerd in het restaureren van antiek
            houtwerk. Zoals bij alle restauratiewerken trachten we zo veel
            mogelijk van de originele timmerwerken te behouden. We voeren de
            herstellingen uit met de aloude technieken zoals liplassen of
            zwaluwstaarten. Ook doen we herstellingen met moderne technieken
            zoals polymeerchemisch en glasvezel.
          </p>
        </div>

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
                    src="/SmallPhoto/restauratie-afbeelding1.jpg"
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
                    src="/SmallPhoto/restauratie-afbeelding2.jpg"
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
                    src="/SmallPhoto/restauratie-afbeelding3.jpg"
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
                    src="/SmallPhoto/restauratie-afbeelding4.jpg"
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
                    src="/SmallPhoto/restauratie-afbeelding5.jpg"
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
                    src="/SmallPhoto/restauratie-afbeelding6.jpg"
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
                    src="/SmallPhoto/restauratie-afbeelding7.jpg"
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
                    src="/SmallPhoto/restauratie-afbeelding8.jpg"
                    alt="Don't forget your alt text"
                  />
                </a>
              </Link>
            </div>
          </SwiperSlide>
          );
        </Swiper>

        <div className="onderwerp">
          <div className="box">
            <p className="onderwerp-titel">Restauratietimmerwerk</p>
            <Timmerwerk className="onderwerp-icoon" />
            <p className="swiper-comment">
              Dakstrukturen en andere structurele elementen (bv. moerbalken) in
              monumenten of andere oude gebouwen zijn meestal gemaakt in hout.
              Hoewel hout een zeer duurzaam bouwmateriaal is, kan na jarenlange
              blootstelling aan de elementen of door aantasting van beestjes,
              restauratie van doen zijn.{" "}
            </p>
          </div>
          <div className="box">
            <p className="onderwerp-titel">Restauratieschrijnwerk</p>
            <Zaag className="onderwerp-icoon" />
            <p className="swiper-comment">
              Dit gaat van ramen en deuren tot trappen en ander interieur
              schrijnwerk. We streven steeds na zo veel mogelijk van het
              originele schrijnwerk te behouden, enkel delen die niet meer gered
              kunnen worden volgens de regels van de kunst geheel of
              gedeeltelijk vervangen.
            </p>
          </div>
          <div className="box">
            <p className="onderwerp-titel">Bereikbaarheid en veiligheid</p>
            <Veiligheid className="onderwerp-icoon" />
            <p className="swiper-comment">
              Platformen en loopbruggen om moeilijk bereikbare plaatsen toch
              gemakkelijk en veilig te kunnen bereiken kunnen we ook
              vervaardigen.
            </p>
          </div>
        </div>
      </div>
      <div className="onderwerp-bottom">
        <div className="box">
          <p className="onderwerp-titel">Restauratietimmerwerk</p>
          <Timmerwerk className="onderwerp-icoon" />
          <p className="swiper-comment">
            Dakstrukturen en andere structurele elementen (bv. moerbalken) in
            monumenten of andere oude gebouwen zijn meestal gemaakt in hout.
            Hoewel hout een zeer duurzaam bouwmateriaal is, kan na jarenlange
            blootstelling aan de elementen of door aantasting van beestjes,
            restauratie van doen zijn.{" "}
          </p>
        </div>
        <div className="box">
          <p className="onderwerp-titel">Restauratieschrijnwerk</p>
          <Zaag className="onderwerp-icoon" />
          <p className="swiper-comment">
            Dit gaat van ramen en deuren tot trappen en ander interieur
            schrijnwerk. We streven steeds na zo veel mogelijk van het originele
            schrijnwerk te behouden, enkel delen die niet meer gered kunnen
            worden volgens de regels van de kunst geheel of gedeeltelijk
            vervangen.
          </p>
        </div>
        <div className="box">
          <p className="onderwerp-titel">Bereikbaarheid en veiligheid</p>
          <Veiligheid className="onderwerp-icoon" />
          <p className="swiper-comment">
            Platformen en loopbruggen om moeilijk bereikbare plaatsen toch
            gemakkelijk en veilig te kunnen bereiken kunnen we ook vervaardigen.
          </p>
        </div>
      </div>
    </>
  );
}
