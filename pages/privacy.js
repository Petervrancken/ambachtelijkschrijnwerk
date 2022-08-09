// SVG imports"
import Timmerwerk from "../public/timmer.svg";
import Zaag from "../public/zaag.svg";
import Veiligheid from "../public/veiligheid.svg";
import Image from "next/image";
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

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy policy | Ambachtelijkschrijnwerk.be</title>
        <link
          rel="canonical"
          href="https://ambachtelijkschrijnwerk.be/privacy"
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
        Privacy policy
      </motion.h1>
      <div className="onderwerp-bottom">
        <div className="swiper-comment info-page">
        <h2>Ons gebruik van verzamelde gegevens</h2>
          <p>
            Wij zijn er van bewust dat u vertrouwen stelt in ons. Wij zien het
            dan ook als onze verantwoordelijkheid om uw privacy te beschermen.
            Op deze pagina laten we u weten welke gegevens we verzamelen als u
            onze website gebruikt, waarom we deze gegevens verzamelen en hoe we
            hiermee uw gebruikservaring verbeteren. Zo snapt u precies hoe wij
            werken.
          </p>
          <p>
            Dit privacy beleid is van toepassing op de diensten van Ambachtelijk schrijnwerk. U
            dient zich ervan bewust te zijn dat Ambachtelijk schrijnwerk niet verantwoordelijk is
            voor het privacy beleid van andere sites en bronnen. Door gebruik te
            maken van deze website geeft u aan het privacy beleid te accepteren.
            Ambachtelijk schrijnwerk respecteert de privacy van alle gebruikers van haar site en
            draagt er zorg voor dat de persoonlijke informatie die u ons
            verschaft vertrouwelijk wordt behandeld.
          </p>
          <h2>Gebruik van onze diensten</h2>
          <p>
            Wanneer u zich aanmeldt voor een van onze diensten vragen we u om
            persoon- of bedrijfsgegevens te verstrekken. Deze gegevens worden
            gebruikt om de dienst uit te kunnen voeren. De gegevens worden
            opgeslagen op eigen beveiligde servers van Ambachtelijk schrijnwerk of die van een
            derde partij. Wij zullen deze gegevens niet combineren met andere
            persoonlijke gegevens waarover wij beschikken.
          </p>
          <h2>Communicatie</h2>
          <p>
            Wanneer u e-mail of andere berichten naar ons verzendt, is het
            mogelijk dat we die berichten bewaren. Soms vragen wij u naar uw
            persoonlijke gegevens die voor de desbetreffende situatie relevant
            zijn. Dit maakt het mogelijk uw vragen te verwerken en uw verzoeken
            te beantwoorden. De gegevens worden opgeslagen op eigen beveiligde
            servers van Ambachtelijk schrijnwerk of die van een derde partij. Wij zullen deze
            gegevens niet combineren met andere persoonlijke gegevens waarover
            wij beschikken.
          </p>
          <h3>Doeleinden</h3>
          <p>
            We verzamelen of gebruiken geen informatie voor andere doeleinden
            dan de doeleinden die worden beschreven in dit privacy beleid tenzij
            we van tevoren uw toestemming hiervoor hebben verkregen.
          </p>
          <h3>Derden</h3>
          <p>
            De informatie wordt niet met derden gedeeld. In enkele gevallen kan
            de informatie intern gedeeld worden. Onze werknemers zijn verplicht
            om de vertrouwelijkheid van uw gegevens te respecteren.
          </p>
          <h3>Veranderingen</h3>
          <p>
            Deze privacyverklaring is afgestemd op het gebruik van en de
            mogelijkheden op deze site. Eventuele aanpassingen en/of
            veranderingen van deze site, kunnen leiden tot wijzigingen in deze
            privacyverklaring. Het is daarom raadzaam om regelmatig deze
            privacyverklaring te raadplegen.
          </p>
        </div>
      </div>
    </>
  );
}
