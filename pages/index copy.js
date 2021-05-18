
import Profiel from "../public/profielicoon.svg"
import Plus from "../public/add.svg"

import Link from 'next/link'

// import Swiper bundle
import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.min.css"


export default function Home() {

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1850: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 3,
      },
      970: {
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
        <p className="sloganText">wij maken geschiedenis van onze toekomst!</p>
      </div>
      <div className="swiper-container mySwiper">
      <div className="swiper-wrapper">
          <div className="swiper-slide">
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
          </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </div>
    <div className="comment-add">
      <p className="sloganText">klik op het plusje om je eigen commentaar toe te voegen!</p>
      <Link href="#"><a title="ga naar comments"><Plus className="icoon"/></a></Link>
    </div>

    </div>
  )
}
