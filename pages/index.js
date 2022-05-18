import Head from "next/head";

import Layout1 from "../components/layout/Layout1";
import Navbar from "../components/navbar/Navbar";
import HeroImage from "../components/display/hero/HeroImage";
import Carousel from "../components/display/carousel/Carousel";

const Home = () => { 
  return (
    <>
      <Head>
        <title>The Market Place</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroImage />
      <Carousel />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout1>{ page }</Layout1>
  );
}

export default Home;
