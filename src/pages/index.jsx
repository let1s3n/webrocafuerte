import Head from "next/head";
import { Image } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Minera Rocafuerte S.A.</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="title" content="Minera Rocafuerte" />
        <meta
          name="description"
          content="Peruanos en busca de la excelencia haciendo minería responsable."
        />
        <meta
          name="keywords"
          content="minera, Minera, Minería, minería, minera rocafuerte,Minera Rocafuerte, minería responsable, Minería Responsable, minería peruana, Minería Peruana"
        />
      </Head>

      <div
        className="position-absolute imageContainer"
      >
        <a
          className="d-block lh-1"
          href="https://www.linkedin.com/company/minera-rocafuerte-sa/"
          target="_blank"
        >
          <Image src="/images/linkedin.png" />
        </a>
      </div>
    </>
  );
}
