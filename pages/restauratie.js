
// SVG imports"
import Image from "next/image"
import Timmerwerk from "../public/timmer.svg"
import Zaag from "../public/zaag.svg"
import Veiligheid from "../public/veiligheid.svg"

import axios from "axios"


//next imports
import Link from 'next/link'

// import Swiper bundle
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper/core';
SwiperCore.use([Autoplay,Pagination,Navigation]);
import "swiper/swiper-bundle.min.css"



export default function Restauratie(restoProps) {
  //console.log(restoProps.restoProps.fotos)
  const fotos = restoProps.restoProps.fotos;
  //const fotoPath = "https://127.0.0.1:8000/images/afbeeldingen/image.php/" + fotos.length > 0 && fotos.map((oneFoto)=>(oneFoto.fotonaam)) + "?width=250&amp;height=250&amp;image=/images/afbeeldingen/gebintebouw.jpg" alt="Don't forget your alt text" ;
  //console.log(fotoPath)

return (
  <>
<div className="backgroundTableTheme">
  <div className="sloganTheme">
    <p className="sloganText">{restoProps.restoProps.titel}</p>
    <p className="infoRestauratie"> {restoProps.restoProps.beschrijving}</p>
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
    //""https://127.0.0.1:8000/images/afbeeldingen/image.php/gebintebouw.jpg?width=250&amp;height=250&amp;image=/images/afbeeldingen/gebintebouw.jpg" alt="Don't forget your alt text"
    className="mySwiper">
    {fotos.length > 0 && fotos.map((oneFoto)=>(
    <SwiperSlide key={oneFoto.id} className="slide-afbeelding">
        <div className="swiper-afbeelding">
          <Link href="#">
            <a title="klik en vergroot!">
            <img src="https://127.0.0.1:8000/images/afbeeldingen/image.php/gebintebouw.jpg?width=250&amp;height=250&amp;image=/images/afbeeldingen/gebintebouw.jpg" alt="Don't forget your alt text" />

          </a>
          </Link>
        </div>
    </SwiperSlide>
    ))} 
    
    
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

export async function getStaticProps(){
  const resp = await axios(
    'https://127.0.0.1:8000/api/themas/1.json'
    
  );
  //const data = await resp.json();
  const restoProps = resp.data;
  //console.log(restoProps.beschrijving,"TEST")
  return{
    props: {
      restoProps,
    },
    revalidate: 3600,
  };
}
