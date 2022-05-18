import { fetchPhotos } from "../../lib/fetch";
import Layout2 from "../../components/layout/Layout2";

////** COMPONENT **////
const Footwear = () => { 

    ////** MARK UP**////
  return (
    <h2>Footwear</h2>
  )
}

Footwear.getLayout = function getLayout(page) {
  return (
    <Layout2>{ page }</Layout2>
  );
}

export default Footwear;