
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
import { useCart } from "react-use-cart";
import SwiperCore, {Pagination, Navigation} from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);






export default function Treecycleshop(winkelKarProps) {

  const {removeItem, emptyCart, totalUniqueItems, items, isEmpty, cartTotal} = useCart();
  //const [card, setCard] = useState([]);
  //card && cardTotale.push(card);
  const getItemsFromCard = {items};
  const productenArray = getItemsFromCard.items;
  //console.log(productenArrayTest);


  // array aanmaken van producten
  //const productenArrayTest = winkelKarProps.winkelKarProps["hydra:member"];
  console.log(productenArray)

  //sorteren via datum
  productenArray.sort((a, b) => b.id - a.id);

  if (isEmpty) return (<div className="sloganTheme">
                      <p className="sloganText">winkelmandje is leeg</p>
                    </div>);


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
        //console.log(oneProduct)
        return(
          <SwiperSlide key={oneProduct.id}>
          <div className="swiper-icoon">
            <div className="swiper-icoon-grades">
              <p>{moment.parseZone(oneProduct.date).calendar()}</p>
              <h3 className="swiper-grades">Prijs: €{oneProduct.price}</h3>
            </div>
            <div className="swiper-icoon-grades">
            <img src={oneProduct.fotoPath} alt="Don't forget your alt text" />
              <div className="product-info">
              <p>Type: {oneProduct.type}</p>
              <p>Hout: {oneProduct.houtsoort}</p>
              <p>Hoogte: {oneProduct.height}cm</p>
              <p>Breedte: {oneProduct.width}cm</p>
              </div>
            </div>
            <button onClick={() => removeItem(oneProduct.id)} className="button-to-delete">verwijder</button>
          </div>
        </SwiperSlide>)
      })}
    </Swiper>
    <div className="sloganTheme">
        <p className="sloganText">totaal: {cartTotal} euro</p>
    </div>
    <div className="sloganTheme">
      <button 
        className="button-buy">koop
      </button>
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
