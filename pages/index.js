
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
      600: {
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
        <div class="swiper-slide">
          <div className="swiper-icoon">
            <div className="swiper-icoon-grades">
              <p>27/08/2021</p>
              <h3 className="swiper-grades">10/10</h3>
            </div>
            <div className="swiper-icoon-grades">
              <Profiel className="icoon"  />
              <p>Peter Vrancken</p>
            </div>
            <p>Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div className="swiper-icoon">
            <div className="swiper-icoon-grades">
              <p>27/08/2021</p>
              <h3 className="swiper-grades">10/10</h3>
            </div>
            <div className="swiper-icoon-grades">
              <Profiel className="icoon"  />
              <p>Marianna Adamou</p>
            </div>
            <p>Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div className="swiper-icoon">
            <div className="swiper-icoon-grades">
              <p>27/08/2021</p>
              <h3 className="swiper-grades">10/10</h3>
            </div>
            <div className="swiper-icoon-grades">
              <Profiel className="icoon"  />
              <p>Michiel Vandenbroecke</p>
            </div>
            <p>Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div className="swiper-icoon">
            <div className="swiper-icoon-grades">
              <p>27/08/2021</p>
              <h3 className="swiper-grades">10/10</h3>
            </div>
            <div className="swiper-icoon-grades">
              <Profiel className="icoon"  />
              <p>Tim Van Mierlo</p>
            </div>
            <p>Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div className="swiper-icoon">
            <div className="swiper-icoon-grades">
              <p>27/08/2021</p>
              <h3 className="swiper-grades">10/10</h3>
            </div>
            <div className="swiper-icoon-grades">
              <Profiel className="icoon"  />
              <p>Charel Jos</p>
            </div>
            <p>Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div className="swiper-icoon">
            <div className="swiper-icoon-grades">
              <p>27/08/2021</p>
              <h3 className="swiper-grades">10/10</h3>
            </div>
            <div className="swiper-icoon-grades">
              <Profiel className="icoon"  />
              <p>Iemand</p>
            </div>
            <p>Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div className="swiper-icoon">
            <div className="swiper-icoon-grades">
              <p>27/08/2021</p>
              <h3 className="swiper-grades">10/10</h3>
            </div>
            <div className="swiper-icoon-grades">
              <Profiel className="icoon"  />
              <p>De bomma</p>
            </div>
            <p>Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div className="swiper-icoon">
            <div className="swiper-icoon-grades">
              <p>27/08/2021</p>
              <h3 className="swiper-grades">10/10</h3>
            </div>
            <div className="swiper-icoon-grades">
              <Profiel className="icoon"  />
              <p>Sonic</p>
            </div>
            <p>Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
    </div>
  )
}
