
//next imports
import Link from 'next/link'
import Image from "next/image"

// import Swiper bundle
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper/core';
SwiperCore.use([Autoplay,Pagination,Navigation]);
import "swiper/swiper-bundle.min.css"


export default function Treecycle() {
  return (
    <>

<div className="backgroundTableTheme">
  <div className="sloganTheme">
    <p className="sloganText">Treecycle</p>
    <p className="infoRestauratie"> ‘Save a tree’ betekent bij de meeste bedrijven het zo min mogelijk afdrukken op papier.
        Bij Ambachtelijkschrijnwerk.be interpreteren we dit op een andere manier.
        Het resthout uit onze schrijnwerkerij en recuperatiehout uit de restauratie wordt bij ons nieuw leven ingeblazen door ons zijprojectje Treecycle.
        Één keer per maand houden we een ‘restjesdag’ waarbij we onze ideeën de vrije loop laten gaan. We gaan dus creatief aan de slag
        met onze restjes en maken hier iets moois van.De resultaten van de restjesdagen vindt je in onze shop.
    </p>
  </div>
  <Swiper 
    slidesPerView={4} 
    spaceBetween={20} 
    slidesPerGroup={1}  
    navigation={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: true
    }}
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
    <SwiperSlide className="slide-afbeelding">
        <div className="swiper-afbeelding">
          <Link href="#">
            <a title="klik en vergroot!">
          <Image 
            src="/Restauratie1.jpg" 
            alt="restauratie1"
            width={250}
            height={250}
          />
          </a>
          </Link>
        </div>
    </SwiperSlide>
    <SwiperSlide className="slide-afbeelding">
        <div className="swiper-afbeelding">
          <Link href="#">
            <a title="klik en vergroot!">
          <Image 
            src="/Restauratie2.jpg" 
            alt="restauratie1"
            width={250}
            height={250}
          />
          </a>
          </Link>
        </div>
    </SwiperSlide>
    <SwiperSlide className="slide-afbeelding">
        <div className="swiper-afbeelding">
          <Link href="#">
            <a title="klik en vergroot!">
          <Image 
            src="/Restauratie3.jpg" 
            alt="restauratie1"
            width={250}
            height={250}
          />
          </a>
          </Link>
        </div>
    </SwiperSlide>
    <SwiperSlide className="slide-afbeelding">
        <div className="swiper-afbeelding">
          <Link href="#">
            <a title="klik en vergroot!">
          <Image 
            src="/Restauratie4.jpg" 
            alt="restauratie1"
            width={250}
            height={250}
          />
          </a>
          </Link>
        </div>
    </SwiperSlide>
    <SwiperSlide className="slide-afbeelding">
        <div className="swiper-afbeelding">
          <Link href="#">
            <a title="klik en vergroot!">
          <Image 
            src="/Restauratie2.jpg" 
            alt="restauratie1"
            width={250}
            height={250}
          />
          </a>
          </Link>
        </div>
    </SwiperSlide>
    
    </Swiper>
    <div className="container-button">
      <button className="button-to-shop">Bezoek onze webshop!</button>
    </div>
  </div>
  </>
  )
}
