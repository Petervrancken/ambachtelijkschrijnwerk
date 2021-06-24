import axios from "axios";
import router, { useRouter } from "next/router";

//Verander hier je URL vergeet niet op deze pagina ook je foto url aan te passen
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000"; // local url

// De foto met de gevraagde id komt hier binnen.
export default function fotoDetail({ foto }) {
  const router = useRouter();
  const fotoPath =
    "https://wdev2.be/peter21/eindwerk/system/image.php/" +
    foto.fotonaam +
    "?image=/peter21/eindwerk/images/afbeeldingen/" +
    foto.fotonaam;
  return (
    <>
      <div className="backgroundTableTheme">
        <p onClick={() => router.back()} className="previous">
          Terug
        </p>
        <div className="sloganTheme">
          <div className="foto-size">
            <img
              className="foto-vergroot"
              src={fotoPath}
              alt="fotovergroting"
            ></img>
          </div>
        </div>
        <p className="foto-beschrijving">{foto.beschrijving}</p>
      </div>
    </>
  );
}
// van alle gerenderde fotos kies je degene uit met de juiste id
export async function getStaticProps(context) {
  const { id } = context.params;
  const resp = await axios(URL + "/api/fotos/" + id + ".json");
  const foto = resp.data;
  return {
    props: {
      foto,
    },
    revalidate: 3600,
  };
}
// hier worden alle fotos gerendered
export async function getStaticPaths() {
  const resp = await axios(URL + "/api/fotos.json");
  const fotos = resp.data;
  return {
    paths: fotos.map((foto) => ({ params: { id: foto.id.toString() } })),
    fallback: false,
  };
}
