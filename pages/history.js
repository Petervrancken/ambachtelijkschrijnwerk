import Link from "next/link";
import DownArrow from "../public/downarrow.svg";
import axios from "axios";
import moment from "moment";
moment.locale("nl");

export default function History(historyProps) {
  //array maken van bestellingen
  const bestellingArray = historyProps.historyProps.bestelling;

  console.log(historyProps.historyProps.adres);
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
              console.log(bestelling);
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
                  <p>
                    {moment
                      .parseZone(bestelling.factuurdatum)
                      .subtract(10, "days")
                      .calendar()}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const resp = await axios("https://127.0.0.1:8000/api/users/4.json");
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
