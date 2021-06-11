
import Image from "next/image"
import Profiel from '../public/profielicoon.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
import formShop from "../comps/formShop"
import moment from 'moment';
moment.locale("nl")

import axios from "axios"


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {Pagination, Navigation} from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

export default function Treecycleshop(shopProps) {

  // array aanmaken van producten
  const productenArray = shopProps.shopProps["hydra:member"];

  //sorteren via datum
  productenArray.sort((a, b) => b.fotos[0].id - a.fotos[0].id);

  //get categories, zoeken op unieke naam in alle categorieen. nog uitwerken.
  const categorieArray = productenArray.length > 0 && productenArray.map((oneProduct)=>( oneProduct.categorie )) ;
  const uniqueCategorieArray = "leeg";

  //console.log(sortProducten)

  function checkCategorie(name){
    
  }



  return (
    <>
    <div className="shop-container">
      <div className="sloganTheme">
          <p className="sloganText">treecycleshop</p>
          <div className="dropdown">
          <div className="linkmenu"><button>zoek op categorie</button></div>
          <div className="dropdown-content">
            
            <Link href="#"><a title="tafels"><p className="textdropdown">tafels</p></a></Link>
            <Link href="#"><a title="snijplanken"><p className="textdropdown">snijplanken</p></a></Link>
            <Link href="#"><a title="gadgets"><p className="textdropdown">gadgets</p></a></Link>
            <Link href="#"><a title="meubels"><p className="textdropdown">meubels</p></a></Link>
          </div>
        </div>
      </div>
    <Swiper 
    slidesPerColumnFill={"row"} 
    slidesPerView={3} 
    slidesPerColumn={2} 
    spaceBetween={30} 
    navigation={true}
    pagination={{"clickable": true}} 
    breakpoints={{
      "1920": {
        "slidesPerView": 3,
        "slidesPerColumn": 2,
      },
      "1367": {
        "slidesPerView": 3,
        "slidesPerColumn": 2,
      },
      "768": {
        "slidesPerView": 2,
        "slidesPerColumn": 2,
      },
      "321": {
        "slidesPerView": 1,
        "slidesPerColumn": 2,
      },
      "10": {
        "slidesPerView": 1,
        "slidesPerColumn": 1,
      },
    }}
    className="mySwiper">
      {productenArray.length > 0 && productenArray.map((oneProduct)=>{
        const pathFoto = "http://localhost:8080/eindwerk-be/image.php/"+ oneProduct.fotos[0].fotonaam + "?width=100&height=100&image=/eindwerk-be/public/images/afbeeldingen/" + oneProduct.fotos[0].fotonaam;
        //console.log(oneProduct)
        return(
          <SwiperSlide key={oneProduct.id}>
          <div className="swiper-icoon">
            <div className="swiper-icoon-grades">
              <p>{moment.parseZone(oneProduct.fotos[0].datum).calendar()}</p>
              <h3 className="swiper-grades">Prijs: €{oneProduct.prijs[0].prijs}</h3>
            </div>
            <div className="swiper-icoon-grades">
            <img src={pathFoto} alt="Don't forget your alt text" />
              <div className="product-info">
              <p>Type: {oneProduct.type}</p>
              <p>Hout: {oneProduct.houtsoort}</p>
              <p>Hoogte: {oneProduct.hoogte}cm</p>
              <p>Breedte: {oneProduct.breedte}cm</p>
              </div>
            </div>
            <button onClick={()=> Form(oneProduct)} className="button-add-item">in winkelmandje</button>
          </div>
        </SwiperSlide>)
      })}
      
     
    </Swiper>
    </div>
  
    </>
  )


  //Button on click tryout stuur de gegevens door met een post om een bestelling aan te maken
  function Form(oneProduct) {
    const addToShop = async event => {
      event.preventDefault()
  
      const res = await axios({
          method: 'post',
          url: 'https://127.0.0.1:8000/api/bestellings.json',
          data: {
            bestelnummer: oneProduct.id,
            factuurnummer: oneProduct.id,
            user: 1,
  
          }
      })
  
      const bestellingPost = resp.data;
      console.log(bestellingPost)
    }
  
    return (
      <form onSubmit={addToShop}>
        <input type="submit" id="name" name="bestelnummer" type="number" autoComplete="name" required />
      </form>
    )
  }
}










export async function getStaticProps(){
  const resp = await axios(
    'https://127.0.0.1:8000/api/productens?page=1&order%5Bfotos.datum%5D=desc.json'
    
  );
  //const data = await resp.json();
  const shopProps = resp.data;
  //console.log(shopProps,"TEST")
  return{
    props: {
      shopProps,
    },
    revalidate: 3600,
  };
}

