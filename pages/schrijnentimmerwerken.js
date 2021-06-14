// SVG imports"
import Image from "next/image";
import Timmerwerk from "../public/timmer.svg";
import Zaag from "../public/zaag.svg";
import Veiligheid from "../public/veiligheid.svg";

import axios from "axios";

//next imports
import Link from "next/link";

// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

export default function schrijnentimmerwerken(schrijnProps) {
  //Put all foto's in an array.
  const fotos = schrijnProps.schrijnProps.fotos;
  //sorteerd op datum/id
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

  //Put all topics in an array.
  const onderwerpen = schrijnProps.schrijnProps.onderwerp;

  return (
    <>
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">{schrijnProps.schrijnProps.titel}</p>
          <p className="infoRestauratie">
            {" "}
            {schrijnProps.schrijnProps.beschrijving}
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
        <div className="onderwerp">
          <div className="box">
            <p className="onderwerp-titel">{onderwerpen[0].titel}</p>
            <Timmerwerk className="onderwerp-icoon" />
            <p>{onderwerpen[0].beschrijving}</p>
          </div>
          <div className="box">
            <p className="onderwerp-titel">{onderwerpen[1].titel}</p>
            <Zaag className="onderwerp-icoon" />
            <p>{onderwerpen[1].beschrijving}</p>
          </div>
          <div className="box">
            <p className="onderwerp-titel">{onderwerpen[2].titel}</p>
            <Veiligheid className="onderwerp-icoon" />
            <p>{onderwerpen[2].beschrijving}</p>
          </div>
        </div>
      </div>
      <div className="onderwerp-bottom">
        <div className="box">
          <p className="onderwerp-titel">{onderwerpen[0].titel}</p>
          <Timmerwerk className="onderwerp-icoon" />
          <p>{onderwerpen[0].beschrijving}</p>
        </div>
        <div className="box">
          <p className="onderwerp-titel">{onderwerpen[1].titel}</p>
          <Zaag className="onderwerp-icoon" />
          <p>{onderwerpen[1].beschrijving}</p>
        </div>
        <div className="box">
          <p className="onderwerp-titel">{onderwerpen[2].titel}</p>
          <Veiligheid className="onderwerp-icoon" />
          <p>{onderwerpen[2].beschrijving}</p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const resp = await axios("https://127.0.0.1:8000/api/themas/2.json");
  //const data = await resp.json();
  const schrijnProps = resp.data;
  //console.log(restoProps.beschrijving,"TEST")
  return {
    props: {
      schrijnProps,
    },
    revalidate: 3600,
  };
}
