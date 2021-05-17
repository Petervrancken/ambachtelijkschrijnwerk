
import Wijmaken from "../public/wijmaken.svg"
import Geschiedenis from "../public/geschiedenis.svg"
import Vanonze  from "../public/vanonze.svg"
import Toekomst from "../public/toekomst.svg"
import Profiel from "../public/profielicoon.svg"


import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css"


export default function Home() {

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      },
      10: {
        slidesPerView: 1,
      }

    }
  });


  return (
    <div className="backgroundTable">
      <div className="slogan">
        <Wijmaken className="sloganText"/>
        <Geschiedenis className="sloganText"/>
        <Vanonze className="sloganTextVanOnze"/>
        <Toekomst className="sloganTextToekomst"/>
      </div>
      <div class="swiper-container mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><Profiel className="icoon"  /></div>
        <div class="swiper-slide"><Profiel className="icoon"  /></div>
        <div class="swiper-slide"><Profiel className="icoon"  /></div>
        <div class="swiper-slide"><Profiel className="icoon"  /></div>
        <div class="swiper-slide"><Profiel className="icoon"  /></div>
        <div class="swiper-slide"><Profiel className="icoon"  /></div>
        <div class="swiper-slide"><Profiel className="icoon"  /></div>
        <div class="swiper-slide"><Profiel className="icoon"  /></div>
        <div class="swiper-slide"><Profiel className="icoon"  /></div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
    </div>
  )
}
