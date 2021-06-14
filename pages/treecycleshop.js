import { Swiper, SwiperSlide } from "swiper/react";
import { useCart } from "react-use-cart";
import Link from "next/link";
import moment from "moment";
//import {useState} from "react";
moment.locale("nl");

import axios from "axios";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

//winkelmandje producten.id opslaan

//const cardTotale = [];
//console.log(cardTotale)

export default function Treecycleshop(shopProps) {
  const { addItem, emptyCart, totalUniqueItems, items } = useCart();
  //const [card, setCard] = useState([]);
  //card && cardTotale.push(card);
  console.log({ items });

  //if(typeof(Storage)!== "undefined"){
  //sessionStorage.setItem("productId", cardTotale);
  //console.log(sessionStorage.getItem(["productId"]))
  //}else{
  //console.log("no support")
  //}

  // array aanmaken van producten
  const productenArray = shopProps.shopProps["hydra:member"];

  //sorteren via datum
  productenArray.sort((a, b) => b.fotos[0].id - a.fotos[0].id);

  //get categories, zoeken op unieke naam in alle categorieen. nog uitwerken.
  const categorieArray =
    productenArray.length > 0 &&
    productenArray.map((oneProduct) => oneProduct.categorie);
  const uniqueCategorieArray = "leeg";

  //console.log(sortProducten)

  function checkCategorie(name) {}

  return (
    <>
      <div className="shop-container">
        <div className="sloganTheme">
          <p className="sloganText">treecycleshop</p>
          <div className="dropdown">
            <div className="linkmenu">
              <button>zoek op categorie</button>
            </div>
            <div className="dropdown-content">
              <Link href="#">
                <a title="tafels">
                  <p className="textdropdown">tafels</p>
                </a>
              </Link>
              <Link href="#">
                <a title="snijplanken">
                  <p className="textdropdown">snijplanken</p>
                </a>
              </Link>
              <Link href="#">
                <a title="gadgets">
                  <p className="textdropdown">gadgets</p>
                </a>
              </Link>
              <Link href="#">
                <a title="meubels">
                  <p className="textdropdown">meubels</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerColumnFill={"row"}
          slidesPerView={3}
          slidesPerColumn={2}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            1920: {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            1367: {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            768: {
              slidesPerView: 2,
              slidesPerColumn: 2,
            },
            321: {
              slidesPerView: 1,
              slidesPerColumn: 2,
            },
            10: {
              slidesPerView: 1,
              slidesPerColumn: 1,
            },
          }}
          className="mySwiper"
        >
          {productenArray.length > 0 &&
            productenArray.map((oneProduct) => {
              const pathFoto =
                "http://localhost:8080/eindwerk-be/image.php/" +
                oneProduct.fotos[0].fotonaam +
                "?width=100&height=100&image=/eindwerk-be/public/images/afbeeldingen/" +
                oneProduct.fotos[0].fotonaam;
              //console.log(oneProduct);
              //maken van nieuwe array om mee te sturen in addItems, anders geeft hij geen prijs weer.
              const products = [
                {
                  id: oneProduct.id,
                  fotoPath: pathFoto,
                  date: oneProduct.fotos[0].datum,
                  width: oneProduct.breedte,
                  height: oneProduct.hoogte,
                  wood: oneProduct.type,
                  price: oneProduct.prijs[0].prijs,
                },
              ];
              //console.log(products[0])
              return (
                <SwiperSlide key={oneProduct.id}>
                  <div className="swiper-icoon">
                    <div className="swiper-icoon-grades">
                      <p>
                        {moment
                          .parseZone(oneProduct.fotos[0].datum)
                          .subtract(10, "days")
                          .calendar()}
                      </p>
                      <h3 className="swiper-grades">
                        Prijs: €{oneProduct.prijs[0].prijs}
                      </h3>
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
                    <button
                      onClick={() => addItem(products[0])}
                      className="button-add-item"
                    >
                      in winkelmandje
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const resp = await axios(
    "https://127.0.0.1:8000/api/productens?page=1&order%5Bfotos.datum%5D=desc.json"
  );
  //const data = await resp.json();
  const shopProps = resp.data;
  //console.log(shopProps,"TEST")
  return {
    props: {
      shopProps,
    },
    revalidate: 3600,
  };
}
