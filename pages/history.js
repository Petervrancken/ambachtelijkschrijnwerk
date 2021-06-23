import Link from "next/link";
import DownArrow from "../public/downarrow.svg";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
moment.locale("nl");

//Verander hier je URL vergeet niet op deze pagina ook je foto url aan te passen
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000";  // local url
const cookieId = [{}];
console.log(cookieId[1]);
export default function History(historyProps) {
  const router = useRouter();
  const [privateCookie, setPrivateCookie] = useState({});
  useEffect(() => {
    Cookies.get("cookieData")
      ? cookieId.push(JSON.parse(Cookies.get("cookieData")).data.id)
      : router.push("/login");
  }, []);

  //array maken van bestellingen
  const bestellingArray = historyProps.historyProps.bestelling;

  //sorteren via datum
  bestellingArray.sort((a, b) => b.id - a.id);

  //console.log(historyProps.historyProps.adres);
  return (
    <>
      <div className="shop-container">
        <div className="profiel-tabs-wide">
          <Link href="/profiel">
            <a title="ga naar profiel">
              <button className="profiel-tab-button">Profiel</button>
            </a>
          </Link>
          <Link href="/history">
            <a title="ga naar history">
              <button className="profiel-tab-button-actief">
                history aankopen
              </button>
            </a>
          </Link>
          <Link href="/comment">
            <a title="ga naar comment">
              <button className="profiel-tab-button">geef een comment</button>
            </a>
          </Link>
        </div>

        <div className="profiel-tabs-small">
          <div className="dropdown">
            <Link href="/history">
              <a title="ga naar aankopen">
                <button className="profiel-tab-button-actief">
                  history aankopen
                  <DownArrow className="profiel-tab-icoon" />
                </button>
              </a>
            </Link>
            <div className="dropdown-content">
              <Link href="/comment">
                <a title="ga naar comment">
                  <p className="textdropdown">geef comment</p>
                </a>
              </Link>
              <Link href="/profiel">
                <a title="ga naar profiel">
                  <p className="textdropdown">Profiel</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <div className="sloganTheme">
            <p className="profile-title">een overzicht van uw aankopen:</p>
          </div>
          {bestellingArray.length > 0 &&
            bestellingArray.map((bestelling) => {
              //console.log(bestelling);
              return (
                <div key={bestelling.id} className="bestelling">
                  <p>
                    <strong>Bestelnummer:</strong> {bestelling.bestelnummer}
                  </p>
                  <p>
                    <strong>Aantal producten:</strong>{" "}
                    {bestelling.bestellingdetail.length}
                  </p>
                  <p>
                    <strong>Totaalprijs:</strong> €{bestelling.totaalprijs}
                  </p>
                  <p>
                    <strong>adres verzending:</strong>{" "}
                    {historyProps.historyProps.adres}
                  </p>
                  <p>{moment.parseZone(bestelling.factuurdatum).format("L")}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

// nog een dynamische user id toevoegen !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export async function getStaticProps() {
  const resp = await axios(URL + "/api/users/" + 1 + ".json");
  //const data = await resp.json();
  const historyProps = resp.data;
  //console.log(shopProps,"TEST")
  return {
    props: {
      historyProps,
    },
    revalidate: 3600,
  };
}
