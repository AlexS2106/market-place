import Navbar from "../navbar/Navbar";
import Footer from "../footers/Footer";
import Header from "../headers/Header";

////** COMPONENT **////
const Layout2 = ( { children } ) => { 

  ////** MARK UP**////
  return (
    <>
      <Navbar />
      <Header />
      <main>{ children }</main>
      <Footer />
    </>
  );
}

export default Layout2;