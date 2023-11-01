// SVG imports"
import Timmerwerk from "../public/timmer.svg";
import Zaag from "../public/zaag.svg";
import Veiligheid from "../public/veiligheid.svg";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Head from "next/head";

import axios from "axios";

//next imports
import Link from "next/link";

// import Swiper bundle
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer | Ambachtelijkschrijnwerk.be</title>
        <link
          rel="canonical"
          href="https://ambachtelijkschrijnwerk.be/disclaimer"
        />
        <meta
          name="description"
          content="Aangezien we een grote liefde hebben voor het vakmanschap van
            weleer, hebben we ons gespecialiseerd in het restaureren van antiek
            houtwerk."
        />
      </Head>

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
        className="sloganText disclaimer-title"
      >
        Disclaimer
      </motion.h1>
      <div className="onderwerp-bottom">
        <div className="swiper-comment info-page">
          <div className="intro contentIntro">
            <p className="p-disclaimer"><strong>In deze disclaimer wordt verstaan onder:</strong></p>
            <ul>
              <li>
                de webpagina: iedere webpagina waarin de uitgever een hyperlink
                naar deze disclaimer opneemt met de intentie deze disclaimer
                daarop te laten gelden;
              </li>
              <li>de uitgever: de bevoegde uitgever van de webpagina;</li>
              <li>
                gebruik(en): onder meer inladen, inloggen, opvragen, raadplegen,
                lezen, bekijken, beluisteren, bewerken, invullen (van
                formulieren), verzenden, (tijdelijk) kopi&euml;ren, bewaren,
                doorzenden, verspreiden, van diensten gebruik maken, plegen van
                rechtshandelingen (bijv. kopen, huren);
              </li>
              <li>
                u: de al dan niet vertegenwoordigde natuurlijke of rechtspersoon
                die de webpagina gebruikt;
              </li>
              <li>
                de inhoud: onder meer teksten, afbeeldingen, hyperlinks,
                geluids- en/of videofragmenten en/of andere objecten;
              </li>
              <li>
                schade: directe of indirecte schade van welke aard dan ook,
                onder meer verloren data en zaken, gederfde omzet, winst of
                ander economisch nadeel.
              </li>
              <li>
                Het onderstaande is van toepassing op de webpagina. Door de
                webpagina te gebruiken stemt u in met deze disclaimer.
              </li>
            </ul>
            <p>
              De uitgever spant er zich voor in de inhoud van de webpagina
              regelmatig te actualiseren en/of aan te vullen. Ondanks deze zorg
              en aandacht is het mogelijk dat de inhoud onvolledig en/of onjuist
              is.
            </p>
            <p>
              De uitgever verschaft de inhoud van de webpagina in de staat
              waarin deze zich feitelijk bevindt, zonder garantie of waarborg
              ten aanzien van de deugdelijkheid, geschiktheid voor een bepaald
              doel of anderszins. De inhoud is experimenteel en voor particulier
              gebruik bedoeld.
            </p>
            <p>
              De uitgever is niet aansprakelijk voor schade die is of dreigt te
              worden toegebracht en voortvloeit uit of in enig opzicht verband
              houdt met het gebruik van de webpagina of met de onmogelijkheid de
              webpagina te kunnen raadplegen.
            </p>
            <p>
              De uitgever mag de webpagina naar eigen inzicht en op ieder door
              hem gewenst moment (laten) veranderen of be&euml;indigen, met of
              zonder voorafgaande verwittiging. De uitgever is niet
              aansprakelijk voor de gevolgen van verandering of
              be&euml;indiging.
            </p>
            <p>
              Behoudens deze disclaimer, is de uitgever niet verantwoordelijk
              voor kenbaar aan de webpagina gekoppelde bestanden van derden.
              Koppeling houdt geen bekrachtiging van die bestanden in.
            </p>
            <p>
              Ongeautoriseerd of oneigenlijk gebruik van de webpagina of de
              inhoud daarvan kan een inbreuk op intellectuele rechten,
              regelgeving m.b.t. privacy, publicatie en/of communicatie in de
              breedste zin van het woord opleveren. U bent verantwoordelijk voor
              al hetgeen u vanuit de webpagina verzendt.
            </p>
            <p>
              De uitgever behoudt zich het recht voor om u de toestemming te
              ontzeggen de webpagina te gebruiken en/of van bepaalde diensten
              die op de webpagina zijn aangeboden, gebruik te maken. In
              aansluiting daarop kan de uitgever de toegang tot de webpagina
              monitoren.
            </p>
            <p>
              U zal de uitgever, diens werknemers, vertegenwoordigers,
              licentiehouders, handelspartners en de auteur van deze disclaimer
              beschermen tegen en vrijwaren van gerechtelijke en
              buitengerechtelijke maatregelen, veroordelingen e.d., inclusief de
              kosten voor rechtsbijstand, accountants e.d. die door derden zijn
              ingesteld ten gevolge van of gerelateerd aan uw gebruik van de
              webpagina, uw inbreuk op welke wettelijke regeling dan ook of de
              rechten van derden.
            </p>
          </div>
          <p>&nbsp;</p>
        </div>
      </div>
    </>
  );
}
