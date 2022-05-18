import Layout2 from "../components/layout/Layout2";
import '../styles/globals.css';

function MyApp ( { Component, pageProps } ) {

  const getLayout = Component.getLayout || ( ( page ) => page );
    
  return getLayout(
      < Component { ...pageProps } />
  );
  
}

export default MyApp;
