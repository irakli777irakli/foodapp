import React, { useEffect } from 'react'
import { Link as Li} from 'react-router-dom';
import {Link} from "react-scroll";
import styles from './Navbar.module.scss';
import { useGlobalContext } from '../../context';

function Navbar() {

  const {showNav,setShowNav} = useGlobalContext();

  useEffect(() => {},[showNav])

  return (
    <header className={styles.navbar}>
      <Li className={styles.navbar__logo} to="/">My<span>Food</span></Li>
      
      <nav className={`${styles.navbar__navigation} ${!showNav ? styles.hideNav : null}`}>
        <ul>
          <li><Link className={styles.navbar__navigation__link}  to="intro" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
          <li><Link className={styles.navbar__navigation__link} to="recipecategories"  spy={true} smooth={true} offset={50} duration={500}>Recipes</Link></li>
          <li><Link className={styles.navbar__navigation__link} to="featured"  spy={true} smooth={true} offset={50} duration={500}>Featured</Link></li>
          <li><Link className={styles.navbar__navigation__link} to="footer" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar