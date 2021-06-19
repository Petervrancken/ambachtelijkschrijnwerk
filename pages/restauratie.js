// SVG imports"
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

//Verander hier je URL vergeet niet op deze pagina ook je foto url aan te passen
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000";  // local url

export default function Restauratie(restoProps) {
  //Put all foto's in an array.
  const fotos = restoProps.restoProps.fotos;
  //sorteerd op datum/id
  fotos.sort((a, b) => b.id - a.id);

  //Put all foto's in an array with URL path attached.
  const fotoFile =
    fotos.length > 0 &&
    fotos.map(
      (oneFoto) =>
        "https://wdev2.be/peter21/eindwerk/system/image.php/" +
        oneFoto.fotonaam +
        "?image=/peter21/eindwerk/images/afbeeldingen/" +
        oneFoto.fotonaam
    );
  console.log(fotos);

  //Put all topics in an array.
  const onderwerpen = restoProps.restoProps.onderwerp;

  return (
    <>
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">{restoProps.restoProps.titel}</p>
          <p className="infoRestauratie">
            {" "}
            {restoProps.restoProps.beschrijving}
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
          // elke foto uitprinten met juiste fotonaam in zijn path
          className="mySwiper"
        >
          {fotoFile.length > 0 &&
            fotoFile.map((oneFoto) => {
              return (
                <SwiperSlide key={oneFoto} className="slide-afbeelding">
                  <div className="swiper-afbeelding">
                    <Link href="#">
                      <a title="klik en vergroot!">
                        <img
                          height={250}
                          width={250}
                          src={oneFoto}
                          alt="Don't forget your alt text"
                        />
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
  const resp = await axios(URL + "/api/themas/1.json");
  //const data = await resp.json();
  const restoProps = resp.data;
  //console.log(restoProps.beschrijving,"TEST")
  return {
    props: {
      restoProps,
    },
    revalidate: 3600,
  };
}
