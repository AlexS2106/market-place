
import Footer from "../footers/Footer";
import Header from "../headers/Header";

const Layout = ( { children } ) => { 
  return (
    <>
      <Header />
      <main>{ children }</main>
      <Footer />
      </>
  )
}

export default Layout;