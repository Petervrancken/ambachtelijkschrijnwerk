

import Profiel from '../public/profielicoon.svg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);

export default function Restauratie() {
  return (
    <>
    <div className="shop-container">
      <div className="sloganTheme">
          <p className="sloganText">treecycleshop</p>
      </div>
    <Swiper 
    slidesPerColumnFill={"row"} 
    slidesPerView={3} 
    slidesPerColumn={2} 
    spaceBetween={30} 
    navigation={true}
    pagination={{"clickable": true}} 
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
