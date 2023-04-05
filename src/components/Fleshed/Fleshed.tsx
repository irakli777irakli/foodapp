import React from 'react'
import styles from "./Fleshed.module.scss"
import {Link} from "react-scroll";


interface props {
    showNav: boolean | undefined;
    fleshed: boolean | undefined;
    setFleshedNav?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

function Fleshed({showNav,fleshed,setFleshedNav}:props) {

    const rmOnNavigate = () => {
        if(setFleshedNav) setFleshedNav(false);
    }
  return (
    <nav className={` ${!showNav ? styles.hideNav : null}
     ${fleshed ? styles.fleshed : styles.navigation}`}>
        <ul className={styles.navlinks}>
          <li><Link onClick={() => rmOnNavigate()} className={styles.link}  to="intro" spy={true} smooth={true} offset={-50} duration={500}>Home</Link></li>
          <li><Link onClick={() => rmOnNavigate()} className={styles.link} to="recipecategories"  spy={true} smooth={true} offset={-50} duration={500}>Recipes</Link></li>
          <li><Link onClick={() => rmOnNavigate()} className={styles.link} to="featured"  spy={true} smooth={true} offset={-50} duration={800}>Featured</Link></li>
          <li><Link onClick={() => rmOnNavigate()} className={styles.link} to="footer" spy={true} smooth={true} offset={0} duration={1000}>About</Link></li>
        </ul>
      </nav>
  )
}

export default Fleshed