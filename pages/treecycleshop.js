
import Image from "next/image"
import Profiel from '../public/profielicoon.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {Pagination, Navigation} from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

export default function Treecycleshop() {
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
    className="mySwiper">
      <SwiperSlide>
        <div className="swiper-icoon">
          <div className="swiper-icoon-grades">
            <p>27/08/2021</p>
            <h3 className="swiper-grades">Prijs: €49.99</h3>
          </div>
          <div className="swiper-icoon-grades">
            <Image
              src="/Restauratie1.jpg"
              alt="Product"
              width={100}
              height={100}
            />
            <div className="product-info">
            <p>Type: snijplank</p>
            <p>Hout: eik</p>
            <p>Hoogte: 2cm</p>
            <p>Breedte: 35cm</p>
            </div>
          </div>
          <button className="button-add-item">in winkelmandje</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-icoon">
          <div className="swiper-icoon-grades">
            <p>27/08/2021</p>
            <h3 className="swiper-grades">Prijs: €49.99</h3>
          </div>
          <div className="swiper-icoon-grades">
            <Image
              src="/Restauratie1.jpg"
              alt="Product"
              width={100}
              height={100}
            />
            <div className="product-info">
            <p>Type: snijplank</p>
            <p>Hout: eik</p>
            <p>Hoogte: 2cm</p>
            <p>Breedte: 35cm</p>
            </div>
          </div>
          <button className="button-add-item">in winkelmandje</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-icoon">
          <div className="swiper-icoon-grades">
            <p>27/08/2021</p>
            <h3 className="swiper-grades">Prijs: €49.99</h3>
          </div>
          <div className="swiper-icoon-grades">
            <Image
              src="/Restauratie1.jpg"
              alt="Product"
              width={100}
              height={100}
            />
            <div className="product-info">
            <p>Type: snijplank</p>
            <p>Hout: eik</p>
            <p>Hoogte: 2cm</p>
            <p>Breedte: 35cm</p>
            </div>
          </div>
          <button className="button-add-item">in winkelmandje</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-icoon">
          <div className="swiper-icoon-grades">
            <p>27/08/2021</p>
            <h3 className="swiper-grades">Prijs: €49.99</h3>
          </div>
          <div className="swiper-icoon-grades">
            <Image
              src="/Restauratie1.jpg"
              alt="Product"
              width={100}
              height={100}
            />
            <div className="product-info">
            <p>Type: snijplank</p>
            <p>Hout: eik</p>
            <p>Hoogte: 2cm</p>
            <p>Breedte: 35cm</p>
            </div>
          </div>
          <button className="button-add-item">in winkelmandje</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-icoon">
          <div className="swiper-icoon-grades">
            <p>27/08/2021</p>
            <h3 className="swiper-grades">Prijs: €49.99</h3>
          </div>
          <div className="swiper-icoon-grades">
            <Image
              src="/Restauratie1.jpg"
              alt="Product"
              width={100}
              height={100}
            />
            <div className="product-info">
            <p>Type: snijplank</p>
            <p>Hout: eik</p>
            <p>Hoogte: 2cm</p>
            <p>Breedte: 35cm</p>
            </div>
          </div>
          <button className="button-add-item">in winkelmandje</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-icoon">
          <div className="swiper-icoon-grades">
            <p>27/08/2021</p>
            <h3 className="swiper-grades">Prijs: €49.99</h3>
          </div>
          <div className="swiper-icoon-grades">
            <Image
              src="/Restauratie1.jpg"
              alt="Product"
              width={100}
              height={100}
            />
            <div className="product-info">
            <p>Type: snijplank</p>
            <p>Hout: eik</p>
            <p>Hoogte: 2cm</p>
            <p>Breedte: 35cm</p>
            </div>
          </div>
          <button className="button-add-item">in winkelmandje</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-icoon">
          <div className="swiper-icoon-grades">
            <p>27/08/2021</p>
            <h3 className="swiper-grades">Prijs: €49.99</h3>
          </div>
          <div className="swiper-icoon-grades">
            <Image
              src="/Restauratie1.jpg"
              alt="Product"
              width={100}
              height={100}
            />
            <div className="product-info">
            <p>Type: snijplank</p>
            <p>Hout: eik</p>
            <p>Hoogte: 2cm</p>
            <p>Breedte: 35cm</p>
            </div>
          </div>
          <button className="button-add-item">in winkelmandje</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-icoon">
          <div className="swiper-icoon-grades">
            <p>27/08/2021</p>
            <h3 className="swiper-grades">Prijs: €49.99</h3>
          </div>
          <div className="swiper-icoon-grades">
            <Image
              src="/Restauratie1.jpg"
              alt="Product"
              width={100}
              height={100}
            />
            <div className="product-info">
            <p>Type: snijplank</p>
            <p>Hout: eik</p>
            <p>Hoogte: 2cm</p>
            <p>Breedte: 35cm</p>
            </div>
          </div>
          <Link href="#"><button className="button-add-item">in winkelmandje</button></Link>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  
    </>
  )
}
