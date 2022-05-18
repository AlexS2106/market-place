import Navbar from "../navbar/Navbar";


////** COMPONENT **////
const Layout1 = ( { children } ) => { 

  ////** MARK UP**////
  return (
    <div style={ { height: "100vh" } }>
      <Navbar />
      <main>{ children }</main>
    </div>
  );
}

export default Layout1;