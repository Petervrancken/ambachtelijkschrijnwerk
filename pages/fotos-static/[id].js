import axios from "axios";

//Verander hier je URL vergeet niet op deze pagina ook je foto url aan te passen
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000"; // local url

// De foto met de gevraagde id komt hier binnen.
export default function fotoDetail({ foto }) {
  console.log(foto);
  const fotoPath =
    "https://wdev2.be/peter21/eindwerk/system/image.php/" +
    foto.fotonaam +
    "?image=/peter21/eindwerk/images/afbeeldingen/" +
    foto.fotonaam;
  return (
    <>
      <img width={800} height={800} src={fotoPath} alt="fotovergroting"></img>
      <p>{foto.beschrijving}</p>
    </>
  );
}
// van alle gerenderde fotos kies je degene uit met de juiste id
export async function getStaticProps(context) {
  const { id } = context.params;
  const resp = await axios(URL + "/api/fotos/" + id + ".json");
  //const data = await resp.json();
  const foto = resp.data;
  console.log(foto, "TEST");
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
