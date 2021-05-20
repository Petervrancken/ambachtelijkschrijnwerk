// SVG imports"
import Image from "next/image"
import Timmerwerk from "../public/timmer.svg"
import Zaag from "../public/zaag.svg"
import Veiligheid from "../public/veiligheid.svg"


//next imports
import Link from 'next/link'

// import Swiper bundle
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper/core';
SwiperCore.use([Autoplay,Pagination,Navigation]);
import "swiper/swiper-bundle.min.css"


export default function schrijnentimmerwerken() {
  return (
    <>

<div className="backgroundTableTheme">
  <div className="sloganTheme">
    <p className="sloganText">Schrijn en timmerwerken</p>
    <p className="infoRestauratie"> Aangezien we een grote liefde hebben voor het vakmanschap van weleer,
        hebben we ons gespecialiseerd in het restaureren van antiek houtwerk.
        Zoals bij alle restauratiewerken trachten we zo veel mogelijk van de originele timmerwerken te behouden.
        We voeren de herstellingen uit met de aloude technieken zoals liplassen of zwaluwstaarten. Ook doen we herstellingen
        met moderne technieken zoals polymeerchemisch en glasvezel.
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
    <div className="onderwerp">
      <div className="box">
      <p className="onderwerp-titel">restauratietimmerwerk</p> 
        <Timmerwerk className="onderwerp-icoon"/>
        <p> Dakstructuren en andere structurele
            elementen (bv. moerbalken) in monumenten of andere oude gebouwen zijn meestal
            gemaakt in hout. Hoewel hout een zeer
            duurzaam bouwmateriaal is, kan na jarenlange blootstelling aan de elementen of
            door aantasting van beestjes, restauratie
            van doen zijn.
        </p>
      </div>
      <div className="box">
      <p className="onderwerp-titel">restauratietimmerwerk</p>
        <Zaag className="onderwerp-icoon"/>
        <p> Dit gaat van ramen en deuren tot trappen
            en ander interieur schrijnwerk.
            We streven steeds na zo veel mogelijk van
            het originele schrijnwerk te behouden,
            enkel delen die niet meer gered kunnen worden
            volgens de regels van de kunst geheel
            of gedeeltelijk vervangen
        </p>
      </div>
      <div className="box">
      <p className="onderwerp-titel">restauratietimmerwerk</p>
        <Veiligheid className="onderwerp-icoon"/>
        <p> Platformen en loopbruggen om moeilijk
            bereikbare plaatsen toch gemakkelijk en
            veilig te kunnen bereiken kunnen we ook
            vervaardigen.
        </p>
      </div>
    </div>
  </div>
  <div className="onderwerp-bottom">
  <div className="box">
  <p className="onderwerp-titel">restauratietimmerwerk</p> 
    <Timmerwerk className="onderwerp-icoon"/>
    <p> Dakstructuren en andere structurele
        elementen (bv. moerbalken) in monumenten of andere oude gebouwen zijn meestal
        gemaakt in hout. Hoewel hout een zeer
        duurzaam bouwmateriaal is, kan na jarenlange blootstelling aan de elementen of
        door aantasting van beestjes, restauratie
        van doen zijn.
    </p>
  </div>
  <div className="box">
      <p className="onderwerp-titel">restauratietimmerwerk</p>
        <Zaag className="onderwerp-icoon"/>
        <p> Dit gaat van ramen en deuren tot trappen
            en ander interieur schrijnwerk.
            We streven steeds na zo veel mogelijk van
            het originele schrijnwerk te behouden,
            enkel delen die niet meer gered kunnen worden
            volgens de regels van de kunst geheel
            of gedeeltelijk vervangen
        </p>
      </div>
      <div className="box">
      <p className="onderwerp-titel">restauratietimmerwerk</p>
        <Veiligheid className="onderwerp-icoon"/>
        <p> Platformen en loopbruggen om moeilijk
            bereikbare plaatsen toch gemakkelijk en
            veilig te kunnen bereiken kunnen we ook
            vervaardigen.
        </p>
      </div>
  </div>
  </>
  )
}
