
import Profiel from "../public/profielicoon.svg"
import Plus from "../public/add.svg"

import Link from 'next/link'

// import Swiper bundle
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination,Navigation} from 'swiper/core';
SwiperCore.use([Pagination,Navigation]);
import "swiper/swiper-bundle.min.css"



export default function Home() {


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
    breakpoints={{
      "1920": {
        "slidesPerView": 4,
      },
      "1366": {
        "slidesPerView": 3,
      },
      "768": {
        "slidesPerView": 2,
      },
      "320": {
        "slidesPerView": 1,
      },
      "10": {
        "slidesPerView": 1,
      },
    }}
    className="mySwiper">
    <SwiperSlide>
      <div className="swiper-icoon">
        <div className="swiper-icoon-grades">
          <p>27/08/2021</p>
          <h3 className="swiper-grades">10/10</h3>
        </div>
        <div className="swiper-icoon-grades">
          <Profiel className="icoon"  />
          <p>Peter Vrancken</p>
        </div>
        <p className="swiper-comment">Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-icoon">
        <div className="swiper-icoon-grades">
          <p>27/08/2021</p>
          <h3 className="swiper-grades">10/10</h3>
        </div>
        <div className="swiper-icoon-grades">
          <Profiel className="icoon"  />
          <p>Peter Vrancken</p>
        </div>
        <p className="swiper-comment">Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-icoon">
        <div className="swiper-icoon-grades">
          <p>27/08/2021</p>
          <h3 className="swiper-grades">10/10</h3>
        </div>
        <div className="swiper-icoon-grades">
          <Profiel className="icoon"  />
          <p>Peter Vrancken</p>
        </div>
        <p className="swiper-comment">Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-icoon">
        <div className="swiper-icoon-grades">
          <p>27/08/2021</p>
          <h3 className="swiper-grades">10/10</h3>
        </div>
        <div className="swiper-icoon-grades">
          <Profiel className="icoon"  />
          <p>Peter Vrancken</p>
        </div>
        <p className="swiper-comment">Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-icoon">
        <div className="swiper-icoon-grades">
          <p>27/08/2021</p>
          <h3 className="swiper-grades">10/10</h3>
        </div>
        <div className="swiper-icoon-grades">
          <Profiel className="icoon"  />
          <p>Peter Vrancken</p>
        </div>
        <p className="swiper-comment">Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
      </div>
    </SwiperSlide>
    
    </Swiper>
    <div className="comment-add">
      <p className="sloganText">klik op het plusje om je eigen commentaar toe te voegen!</p>
      <Link href="#"><a title="ga naar comments"><Plus className="icoon"/></a></Link>
    </div>
  </div>
  )
}

