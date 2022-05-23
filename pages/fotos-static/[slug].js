import axios from "axios";
import router, { useRouter } from "next/router";
import Image from "next/image";

//Verander hier je URL vergeet niet op deze pagina ook je foto url aan te passen
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000"; // local url

// De foto met de gevraagde id komt hier binnen.
export default function fotoDetail() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className="backgroundTableTheme">
        <p onClick={() => router.back()} className="previous">
          Terug
        </p>
        <div className="sloganTheme">
          <div className="foto-size">
            <Image
              className="foto-vergroot"
              src={`/static/BigPhoto/${slug}`}
              width={1000}
              height={1000}
              alt={`${slug}`}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
