import axios from "axios";
import Avatar from "../public/avatar.svg";
import Head from "next/head";

//Verander hier je URL vergeet niet op deze pagina ook je foto url aan te passen
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000";  // local url

export default function Contact(contactProps) {
  return (
    <>
    <Head>
      <title>Contact | Ambachtelijkschrijnwerk.be</title>
      <link rel="canonical" href="https://ambachtelijkschrijnwerk.be/contact/" />
      <meta name="description" content="Ambachtelijkschrijnwerk.be is ontstaan uit de samenwerking van twee
            gepassioneerde restauratieschrijnwerkers."/>
    </Head>
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">Wie zijn wij</p>
          <p className="infoRestauratie">
            Ambachtelijkschrijnwerk.be is ontstaan uit de samenwerking van twee
            gepassioneerde restauratieschrijnwerkers. Samen Hebben we meer dan
            20 jaar ervaring in restauratieschrijnwerk en algemeen massief
            schrijnwerk. In ons atelier zijn we goed uitgerust voor iedere job
            met massief hout.
          </p>
        </div>
        <div className="onderwerp-contact">
          <div className="box">
            <Avatar className="onderwerp-icoon" />
            <p className="onderwerp-titel">anton destrooper</p>
          </div>
          <div className="box">
            <Avatar className="onderwerp-icoon" />
            <p className="onderwerp-titel">kristof van dooren</p>
          </div>
        </div>
        <div className="sloganTheme">
          <p className="sloganText">contact</p>
          <p className="infoRestauratie">anton@ambachtelijkschrijnwerk.be</p>
          <p className="infoRestauratie">
            ambachtelijkelaan 258, 5001 houtdorp
          </p>
          <p className="infoRestauratie">+32 484 84 84 84 84</p>
        </div>
      </div>
    </>
  );
}
