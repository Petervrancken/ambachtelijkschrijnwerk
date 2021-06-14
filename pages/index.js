import Profiel from "../public/profielicoon.svg";
import Plus from "../public/add.svg";
import moment from "moment";
moment.locale("nl");

import axios from "axios";

import Link from "next/link";

// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

export default function Home({ comments }) {
  return (
    <div className="backgroundTable">
      <div className="slogan">
        <p className="sloganText">wij maken geschiedenis van onze toekomst!</p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
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
        {comments.length > 0 &&
          comments.map((oneComment) => (
            <SwiperSlide key={oneComment.id}>
              <div className="swiper-icoon">
                <div className="swiper-icoon-grades">
                  <p>
                    {moment
                      .parseZone(oneComment.datum)
                      .subtract(10, "days")
                      .calendar()}
                  </p>
                  <h3 className="swiper-grades">{oneComment.rating}/10</h3>
                </div>
                <div className="swiper-icoon-grades">
                  <Profiel className="icoon" />
                  <p>
                    {oneComment.user.voornaam} {oneComment.user.naam}
                  </p>
                </div>
                <div
                  className="swiper-comment"
                  dangerouslySetInnerHTML={{ __html: oneComment.beschrijving }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="comment-add">
        <p className="sloganText">
          klik op het plusje om je eigen commentaar toe te voegen!
        </p>
        <Link href="/comment">
          <a title="ga naar comments">
            <Plus className="icoon-comment" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const resp = await axios(
    "https://127.0.0.1:8000/api/comments.json?order%5Bdatum%5D=desc"
  );
  //const data = await resp.json();
  const comments = resp.data;
  return {
    props: {
      comments,
    },
    revalidate: 3600,
  };
}
