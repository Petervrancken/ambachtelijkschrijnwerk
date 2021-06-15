import Image from "next/image";
import axios from "axios";
import moment from "moment";
moment.locale("nl");
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import { useCart } from "react-use-cart";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

export default function Treecycleshop(winkelKarProps) {
  const { removeItem, emptyCart, totalUniqueItems, items, isEmpty, cartTotal } =
    useCart();
  //const [card, setCard] = useState([]);
  //card && cardTotale.push(card);
  const getItemsFromCard = { items };
  const productenArray = getItemsFromCard.items;
  //console.log(productenArrayTest);

  //Array van producten aanmaken met de juiste berekeningen en doorgeven aan de submitFunctie "POST"
  const buyProductArray = [];
  productenArray.forEach(
    (product) =>
      console.log(product) ||
      buyProductArray.push({
        besteldetailnetto: Number(
          (product.price - (21 / 100) * product.price).toFixed(2)
        ),
        besteldetailbtwbedrag: Number(((21 / 100) * product.price).toFixed(2)),
        besteldetailbruto: product.price,
        producten: `/api/productens/${product.id}`,
      })
  );

  //console.log(buyProductArray[0].besteldetailnetto);
  //console.log([JSON.stringify(buyProductArray)] + ",");

  // Vergeet met login niet de  user dynamisch te maken!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  function submitProducts() {
    console.log("button works");
    console.log(JSON.stringify(buyProductArray));
    axios
      .post("https://127.0.0.1:8000/api/bestellings", {
        bestelnummer: Math.floor(Math.random() * 10000000000),
        //factuurdatum: "2021-06-13T18:06:57.195Z",
        factuurnummer: Math.floor(Math.random() * 10000000000),
        user: "/api/users/4",
        bestellingdetail: JSON.stringify([buyProductArray]),
        totaalprijs: Number(cartTotal.toFixed(2)),
      })
      .then(function (response) {
        console.log(response);
        emptyCart();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //sorteren via datum
  productenArray.sort((a, b) => b.id - a.id);

  if (isEmpty)
    return (
      <div className="sloganTheme">
        <p className="sloganText">winkelmandje is leeg</p>
      </div>
    );

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
              //if(productIdArray[0].includes(oneProduct.id) === "true"){"hello"}
              //console.log(oneProduct.id)
              //console.log(oneProduct)
              return (
                <SwiperSlide key={oneProduct.id}>
                  <div className="swiper-icoon">
                    <div className="swiper-icoon-grades">
                      <p>
                        {moment
                          .parseZone(oneProduct.date)
                          .subtract(10, "days")
                          .calendar()}
                      </p>
                      <h3 className="swiper-grades">
                        Prijs: €{oneProduct.price}
                      </h3>
                    </div>
                    <div className="swiper-icoon-grades">
                      <img src={oneProduct.fotoPath} alt="Iets" />
                      <div className="product-info">
                        <p>Type: {oneProduct.name}</p>
                        <p>Hout: {oneProduct.wood}</p>
                        <p>Hoogte: {oneProduct.height}cm</p>
                        <p>Breedte: {oneProduct.width}cm</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(oneProduct.id)}
                      className="button-to-delete"
                    >
                      verwijder
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className="sloganTheme">
          <p className="sloganText">totaal: {cartTotal.toFixed(2)} euro</p>
        </div>
        <div className="sloganTheme">
          <button onClick={() => submitProducts()} className="button-buy">
            koop
          </button>
        </div>
      </div>
    </>
  );
}
