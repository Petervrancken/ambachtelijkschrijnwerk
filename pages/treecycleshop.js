import { Swiper, SwiperSlide } from "swiper/react";
import { useCart } from "react-use-cart";
import Link from "next/link";
import moment from "moment";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
moment.locale("nl");

import axios from "axios";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

//Verander hier je URL vergeet niet op deze pagina ook je foto url aan te passen
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000";  // local url

export default function Treecycleshop(shopProps) {
  const router = useRouter();
  const [privateCookie, setPrivateCookie] = useState({});
  useEffect(() => {
    Cookies.get("cookieData")
      ? setPrivateCookie(Cookies.get("cookieData"))
      : router.push("/login");
  }, []);

  const { addItem, emptyCart, totalUniqueItems, items } = useCart();
  console.log({ items });
  console.log(shopProps);

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
            1500: {
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
              console.log(oneProduct);
              const pathFoto =
                "https://wdev2.be/peter21/eindwerk/system/image.php/" +
                oneProduct.fotos[0].fotonaam +
                "?image=/peter21/eindwerk/images/afbeeldingen/" +
                oneProduct.fotos[0].fotonaam;

              //maken van nieuwe array om mee te sturen in addItems, anders geeft hij geen prijs weer.
              const products = [
                {
                  id: oneProduct.id,
                  fotoPath: pathFoto,
                  date: oneProduct.fotos[0].datum,
                  width: oneProduct.breedte,
                  height: oneProduct.hoogte,
                  name: oneProduct.type,
                  wood: oneProduct.houtsoort,
                  price: oneProduct.prijs[0].prijs,
                },
              ];
              const [disable, setDisable] = useState();
              console.log(disable);
              return (
                <SwiperSlide key={oneProduct.id}>
                  <div className="swiper-icoon">
                    <div className="swiper-icoon-grades">
                      <p>
                        {moment
                          .parseZone(oneProduct.fotos[0].datum)
                          .format("L")}
                      </p>
                      <h3 className="swiper-grades">
                        Prijs: €{oneProduct.prijs[0].prijs}
                      </h3>
                    </div>
                    <div className="swiper-icoon-grades">
                      <img
                        src={pathFoto}
                        width={100}
                        height={100}
                        alt="Don't forget your alt text"
                      />
                      <div className="product-info">
                        <p>Type: {oneProduct.type}</p>
                        <p>Hout: {oneProduct.houtsoort}</p>
                        <p>Hoogte: {oneProduct.hoogte}cm</p>
                        <p>Breedte: {oneProduct.breedte}cm</p>
                      </div>
                    </div>
                    <button
                      id="button-add-item"
                      onClick={() => addItem(products[0]) || setDisable(true)}
                      className="button-add-item"
                      disabled={disable}
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
    URL + "/api/productens?page=1&order%5Bfotos.datum%5D=desc.json"
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
