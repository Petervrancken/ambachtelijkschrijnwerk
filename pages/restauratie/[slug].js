import axios from "axios";
import router, { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";


// De foto met de gevraagde id komt hier binnen.
export default function fotoDetail() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
    <Head>
        <title>Restauratie van timmerwerk | Ambachtelijkschrijnwerk.be</title>
        <link
          rel="canonical"
          href={`https://ambachtelijkschrijnwerk.be/restauratie/${slug}`}
        />
        <meta
          name="description"
          content="Aangezien we een grote liefde hebben voor het vakmanschap van
            weleer, hebben we ons gespecialiseerd in het restaureren van antiek
            houtwerk."
        />
      </Head>
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
