import axios from "axios";
import Avatar from "../public/avatar.svg";

//Verander hier je URL vergeet niet op deze pagina ook je foto url aan te passen
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000";  // local url

export default function Contact(contactProps) {
  return (
    <>
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">{contactProps.contactProps.titel}</p>
          <p className="infoRestauratie">
            {contactProps.contactProps.beschrijving}
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
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const resp = await axios(URL + "/api/themas/4.json");
  const contactProps = resp.data;
  return {
    props: {
      contactProps,
    },
    revalidate: 3600,
  };
}
