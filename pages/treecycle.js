//next imports
import Link from "next/link";
import Image from "next/image";

import axios from "axios";
// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

//Verander hier je URL vergeet niet op deze pagina ook je foto url aan te passen
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000";  // local url

export default function Treecycle(treeProps) {
  //Put all foto's in an array.
  const fotos = treeProps.treeProps.fotos;
  //sorteren van de fotos via id/datum
  fotos.sort((a, b) => b.id - a.id);

  //Put all foto's in an array with URL path attached.

  return (
    <>
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">Treecycle</p>
          <p className="infoRestauratie">
            ‘Save a tree’ betekent bij de meeste bedrijven het zo min mogelijk
            afdrukken op papier. Bij Ambachtelijkschrijnwerk.be interpreteren we
            dit op een andere manier. Het resthout uit onze schrijnwerkerij en
            recuperatiehout uit de restauratie wordt bij ons nieuw leven
            ingeblazen door ons zijprojectje Treecycle. Één keer per maand
            houden we een ‘restjesdag’ waarbij we onze ideeën de vrije loop
            laten gaan. We gaan dus creatief aan de slag met onze restjes en
            maken hier iets moois van.De resultaten van de restjesdagen vindt je
            in onze shop.
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
          className="mySwiper"
        >
          <SwiperSlide key="afbeelding1" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-01.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/SmallPhoto/treecycle-01.jpg"
                    alt="Don't forget your alt text"
                  />
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding2" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-02.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/SmallPhoto/treecycle-02.jpg"
                    alt="Don't forget your alt text"
                  />
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding3" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-03.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/SmallPhoto/treecycle-03.jpg"
                    alt="Don't forget your alt text"
                  />
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding4" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-04.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/SmallPhoto/treecycle-04.jpg"
                    alt="Don't forget your alt text"
                  />
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding5" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-05.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/SmallPhoto/treecycle-05.jpg"
                    alt="Don't forget your alt text"
                  />
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding6" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-06.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/SmallPhoto/treecycle-06.jpg"
                    alt="Don't forget your alt text"
                  />
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding7" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-07.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/SmallPhoto/treecycle-07.jpg"
                    alt="Don't forget your alt text"
                  />
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide key="afbeelding8" className="slide-afbeelding">
            <div className="swiper-afbeelding">
              <Link href="/fotos-static/treecycle-08.jpg">
                <a title="klik en vergroot!">
                  <Image
                    height={250}
                    width={250}
                    src="/SmallPhoto/treecycle-08.jpg"
                    alt="Don't forget your alt text"
                  />
                </a>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const resp = await axios(URL + "/api/themas/3.json");

  const treeProps = resp.data;

  return {
    props: {
      treeProps,
    },
    revalidate: 3600,
  };
}
