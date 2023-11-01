// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { motion } from "framer-motion";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// verander hier je URL endpoints
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000"; // local url

export default function Home(description) {
  return <>
    <Head>
      <title>Ambachtelijk schrijnwerk | Ambachtelijkschrijnwerk.be</title>
      <link rel="canonical" href="https://ambachtelijkschrijnwerk.be/" />
      <meta
        name="description"
        content="Ambachtelijkschrijnwerk.be is ontstaan uit de samenwerking van twee
          gepassioneerde restauratieschrijnwerkers."
      />
    </Head>
    <div className="backgroundTable">
      <div className="slogan">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.5,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <h1 className="sloganText sloganh1">Ambachtelijk schrijnwerk</h1>
          <h2 className="sloganText sloganh2">
            Schrijnwerk in ere hersteld en klaar voor de toekomst!
          </h2>
          <p className="introductie-titel">Wie zijn we?</p>
          <div className="introductie-text">
            <p>
              Ambachtelijkschrijnwerk.be is ontstaan uit de samenwerking van
              twee gepassioneerde restauratieschrijnwerkers: Kristof Van
              Dooren en Anton Destrooper.
              <br />
              <br />
              Samen hebben we meer dan 20 jaar ervaring in zowel{" "}
              <a href="/restauratie">restauratieschrijnwerk</a> en algemeen
              massief schrijnwerk. In ons atelier zijn we goed uitgerust voor
              iedere job met massief hout.
            </p>
            <div className="usp">
              <div>&#9989; 20 jaar ervaring</div>
              <div>&#9989; Wij gaan voor klantentevredenheid</div>
              <div className="lastusp">
                &#9989; Dé restauratie specialist in uw buurt
              </div>
              
              <div className="Button1">
                <a href="tel:0032495364587" className="uspbutton">
                  Bel ons: 0495 36 45 87
                </a>
              </div>
              <div className="Button1">
                <a
                  href="mailto:info@ambachtelijkschrijnwerk.be"
                  className="uspbutton"
                >
                  <span className="buttonmargin">
                    Mail ons: info@ambachtelijkschrijnwerk.be
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <p className="introductie-titel titel-twee">Wat doen we?</p>
    <div className="services-image-blocks">
      <Link href="/restauratie" legacyBehavior>
      <div className="image-block add-pointer">
        <span>Restauratie</span>
        <Image
          priority={true}
          width={0}
          height={0}
          src="/static/BigPhoto/restauratie-afbeelding7.jpg"
          alt="raam restauratie"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
      </Link>
      <Link href="/schrijnentimmerwerken" legacyBehavior>
      <div className="image-block add-pointer">
        <span>Schrijn en timmerwerken</span>
        <Image
          priority={true}
          width={0}
          height={0}
          src="/static/BigPhoto/schrijnentimmerwerken-01.jpg"
          alt="tuinhuis"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
      </Link>
      <Link href="/treecycle" legacyBehavior>
      <div className="image-block add-pointer">
        <span>Treecycle</span>
        <Image
          priority={true}
          width={0}
          height={0}
          src="/static/BigPhoto/treecycle-08.jpg"
          alt="snijplank"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
      </Link>
    </div>
  </>;
}
