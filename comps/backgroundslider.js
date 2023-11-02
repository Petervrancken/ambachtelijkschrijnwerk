import Image from "next/image";
// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation, EffectFade } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.scss';

export default function Backgroundslider() {
  return (
    <>
      <div className="background-slider">
        <Swiper
          loop={true}
          speed={4000}
          spaceBetween={0}
          effect='fade'
          EffectFade={{ crossFade: true }}
          autoplay={{
            delay: 5000,
          }}
          className="mySwiper backgroundSwiper"
        >
          <SwiperSlide>
            <div className="image-one image-opacity">
              <Image
                height={250}
                width={250}
                src="/static/BigPhoto/backgroundpic.jpg"
                alt="background ambachtelijke schrijnwerken"
                sizes="100vw"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-two image-opacity">
              <Image
                height={250}
                width={250}
                src="/static/BigPhoto/backgroundpic2.jpg"
                alt="background ambachtelijke schrijnwerken"
                sizes="100vw"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-three image-opacity">
              <Image
                height={250}
                width={250}
                src="/static/BigPhoto/nieuw - buitenschrijnwerk - meranti 3.jpg"
                alt="background ambachtelijke schrijnwerken"
                sizes="100vw"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
