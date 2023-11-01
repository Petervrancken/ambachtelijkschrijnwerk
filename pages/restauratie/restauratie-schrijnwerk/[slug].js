import axios from "axios";
import router, { useRouter } from "next/router";
import Image from "next/legacy/image";
import Head from "next/head";


// De foto met de gevraagde id komt hier binnen.
export default function fotoDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
    <Head>
        <link
          rel="canonical"
          href={`https://ambachtelijkschrijnwerk.be/restauratie/restauratieschrijnwerk/${slug}`}
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
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
