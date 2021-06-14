//next imports
import Link from "next/link";
import Image from "next/image";

import axios from "axios";
// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

export default function Treecycle(treeProps) {
  //Put all foto's in an array.
  const fotos = treeProps.treeProps.fotos;
  //sorteren van de fotos via id/datum
  fotos.sort((a, b) => b.id - a.id);

  //Put all foto's in an array with URL path attached.
  const fotoFile =
    fotos.length > 0 &&
    fotos.map(
      (oneFoto) =>
        "http://localhost:8080/eindwerk-be/image.php/" +
        oneFoto.fotonaam +
        "?width=250&height=250&cropratio=1:1&image=/eindwerk-be/public/images/afbeeldingen/" +
        oneFoto.fotonaam
    );

  return (
    <>
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">{treeProps.treeProps.titel}</p>
          <p className="infoRestauratie"> {treeProps.treeProps.beschrijving}</p>
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
            1920: {
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
          {fotoFile.length > 0 &&
            fotoFile.map((oneFoto) => {
              return (
                <SwiperSlide key={oneFoto} className="slide-afbeelding">
                  <div className="swiper-afbeelding">
                    <Link href="#">
                      <a title="klik en vergroot!">
                        <img src={oneFoto} alt="Don't forget your alt text" />
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className="container-button">
          <Link href="/treecycleshop">
            <button className="button-to-shop">Bezoek onze webshop!</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const resp = await axios("https://127.0.0.1:8000/api/themas/3.json");
  //const data = await resp.json();
  const treeProps = resp.data;
  //console.log(restoProps.beschrijving,"TEST")
  return {
    props: {
      treeProps,
    },
    revalidate: 3600,
  };
}
