
import Profiel from "../public/profielicoon.svg"

// import Swiper bundle
import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css"


export default function Home() {

  const swiper = new Swiper('.swiper-container', {
    
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      790: {
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
      <div class="swiper-container">
        <div class="swiper-wrapper">
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
              <p>Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
            </div>
          </div>
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
              <p>Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
            </div>
          </div>
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
              <p>Anton en Kristof hebben zeer goed werk afgeleverd! Ik kan vol lof genieten van mijn op maat gemaakte trap!</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  )
}
