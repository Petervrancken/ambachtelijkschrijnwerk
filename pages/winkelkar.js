
import Image from "next/image"
import axios from "axios"
import moment from 'moment'
moment.locale("nl")
import Profiel from '../public/profielicoon.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
import {useState} from "react";


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {Pagination, Navigation} from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);






export default function Treecycleshop(winkelKarProps) {

  //get ID from products in the storage
  const productIdArray = [];
  
  if(typeof(Storage)!== "undefined"){
  const shopProductIdData = sessionStorage.getItem(["productId"]);
  const filteredShopProductId= shopProductIdData.split('').filter((item)=> item !== ",");
  const parsedProductIdArray = filteredShopProductId.map(item => parseInt(item));
  productIdArray.push(parsedProductIdArray)
  //console.log(parsedProductIdArray)
  }else{
    console.log("no support")
  }
  console.log(productIdArray[0])

  // array aanmaken van producten
  const productenArray = winkelKarProps.winkelKarProps["hydra:member"];
  //console.log(productenArray)

  //sorteren via datum
  productenArray.sort((a, b) => b.fotos[0].id - a.fotos[0].id);



  return (
    <>
    <div className="shop-container">
      <div className="sloganTheme">
          <p className="sloganText">de winkelkar</p>
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
        //if(productIdArray[0].includes(oneProduct.id) === "true"){"hello"}
        //console.log(oneProduct.id) 
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
            <button className="button-to-delete">verwijder</button>
          </div>
        </SwiperSlide>)
      })}
    </Swiper>
    <div className="sloganTheme">
        <p className="sloganText">totaal: 198.99 euro</p>
    </div>
    <div className="sloganTheme">
      <button className="button-buy">koop</button>
    </div>
    </div>
  
    </>
  )
}

export async function getStaticProps(){
  const resp = await axios(
    'https://127.0.0.1:8000/api/productens?page=1&order%5Bfotos.datum%5D=desc.json'
    
  );
  //const data = await resp.json();
  const winkelKarProps = resp.data;
  //console.log(shopProps,"TEST")
  return{
    props: {
      winkelKarProps,
    },
    revalidate: 3600,
  };
}
