//next imports
import Timmerwerk from "../public/timmer.svg";
import Zaag from "../public/zaag.svg";
import Veiligheid from "../public/veiligheid.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import axios from "axios";
// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

export default function Restauratietimmerwerk() {
  return (
    <>
      <div className="backgroundTableTheme">
        <div className="icon-box-timmerwerk">
          <div className="icon-field">
            <Link href="/restauratietimmerwerk">
              <a title="timmerwerk foto's">
                <Timmerwerk className="onderwerp-icoon" />
              </a>
            </Link>
          </div>
          <div className="icon-field">
            <Link href="/restauratietimmerwerk">
              <a title="schrijnwerk foto's">
                <Zaag className="onderwerp-icoon" />
              </a>
            </Link>
          </div>
          <div className="icon-field">
            <Link href="/restauratietimmerwerk">
              <a title="veiligheid foto's">
                <Veiligheid className="onderwerp-icoon" />
              </a>
            </Link>
          </div>
        </div>
        <div className="onderwerp-box">
          <h1 className="onderwerp-titel">Restauratietimmerwerk</h1>
          <p>
            Dakstrukturen en andere structurele elementen (bv. moerbalken) in
            monumenten of andere oude gebouwen zijn meestal gemaakt in hout.
            Hoewel hout een zeer duurzaam bouwmateriaal is, kan na jarenlange
            blootstelling aan de elementen of door aantasting van beestjes,
            restauratie van doen zijn
          </p>
        </div>
        <div className="image-box">
          <Image
            height={250}
            width={250}
            src="/static/SmallPhoto/schrijnentimmerwerken-01.jpg"
            alt="Don't forget your alt text"
          />
          <Image
            height={250}
            width={250}
            src="/static/SmallPhoto/schrijnentimmerwerken-01.jpg"
            alt="Don't forget your alt text"
          />
          <Image
            height={250}
            width={250}
            src="/static/SmallPhoto/schrijnentimmerwerken-01.jpg"
            alt="Don't forget your alt text"
          />
          <Image
            height={250}
            width={250}
            src="/static/SmallPhoto/schrijnentimmerwerken-01.jpg"
            alt="Don't forget your alt text"
          />
        </div>
      </div>
    </>
  );
}
