import Head from 'next/head'
/* import Image from 'next/image' */
import { Container,Row, Col, Image } from 'react-bootstrap'
export default function Home() {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <title>Minera Rocafuerte S.A.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="title" content="Minera Rocafuerte" />
        <meta name="description" content="Peruanos en busca de la excelencia haciendo minería responsable." />
        <meta name="keywords" content="minera, Minera, Minería, minería, minera rocafuerte,Minera Rocafuerte, minería responsable, Minería Responsable, minería peruana, Minería Peruana" />
      </Head>
    </>
  )
}
