import Link from "next/link";
import { v4 as uuid } from "uuid";

import {
  navbar,
  navbarWrapper,
} from "./Navbar.module.css";

////** COMPONENT **////
const Navbar = () => {
////** STATE & CONTEXT **////
  
  //Menu of pages
  const navigation = [
    { title: "Clothing", link: "/clothing" },
    { title: "Footwear", link: "/footwear" },
    { title: "Equipment", link: "/equipment" },
    { title: "About", link: "/about" },
  ];
////** FUNCTIONS **////
  //Generate page links
  const navList = navigation.map( page => <Link href={ page.link } key={ uuid() }><a>{ page.title }</a></Link>)

////** MARK UP **////
  return (
    <div className={ navbarWrapper}>
    <nav className={navbar}>
        { navList }
    </nav>
    </div>
  );
}

export default Navbar;