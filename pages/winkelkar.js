import Profiel from "../public/profielicoon.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


import SwiperCore, {
  Mousewheel,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Mousewheel,Pagination]);


export default function App() {
  
  
  
  return (
    <>
    <div className="backgroundTableShop">
      <div className="sloganTheme">
        <p className="sloganText">treecycleshop</p>
      </div>
    <Swiper 
    direction={'vertical'} 
    slidesPerView={2} 
    spaceBetween={30} 
    mousewheel={true} 
    pagination={{"clickable": true}} 
    className="mySwiper">
    <SwiperSlide>
      <div className="swiper-icoon">
        <div className="swiper-icoon-grades">
          <p>27/08/2021</p>
        </div>
        <div className="swiper-icoon-grades">
        <Image 
            src="/Restauratie2.jpg" 
            alt="restauratie1"
            width={100}
            height={100}
          />
          <div>
          <p className="shop-info">Peter Vrancken</p>
          <p className="shop-info">Peter Vrancken</p>
          <p className="shop-info">Peter Vrancken</p>
          <p className="shop-info">Peter Vrancken</p>
          </div>
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
  </div>
  </>
  )
}