// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { motion } from "framer-motion";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Hammerpick from "../public/wood-frame.svg";


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
              Samen hebben we meer dan 20 jaar ervaring in zowel 
              restauratieschrijnwerk en algemeen
              massief schrijnwerk. In ons atelier zijn we goed uitgerust voor
              iedere job met massief hout.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    <section className="section-1-home">
      <div className="introductie-titel titel-twee">
        <p className="wat-doen-we">Wat doen we?</p>
      </div>
    <div className="services-image-blocks">
      <div className="service-block">
      <div className="image-block icon-block">
        <Hammerpick className="home-icons"/>
        <span>tevreden klanten</span>
      </div>
      <Link href="/restauratie" legacyBehavior>
      <div title="Naar Restauratie" className="image-block add-pointer">
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
            objectFit: "contain"
          }} />
      </div>
      </Link>
      <Link href="/schrijnentimmerwerken" legacyBehavior>
      <div title="Naar schrijnwerken" className="image-block add-pointer stay-put">
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
            objectFit: "contain"
          }} />
      </div>
      </Link>
      <Link href="/treecycle" legacyBehavior>
      <div title="Naar Treecycle" className="image-block add-pointer">
        <span>Treecycle</span>
        <Image
          priority={true}
          width={0}
          height={0}
          src="/static/BigPhoto/treecycle-08.jpg"
          alt="snijplank"
          sizes="100vw"
          style={{
            height: 'auto',
            width: "100%",
            objectFit: "contain"
          }} />
      </div>
      </Link>
      <div className="image-block icon-block">
        <Hammerpick className="home-icons"/>
        <span>20 jaar ervaring</span>
      </div>
      </div>
    </div>
    </section>
  </>;
}
