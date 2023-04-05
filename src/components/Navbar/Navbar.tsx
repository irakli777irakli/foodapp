import React, { useEffect } from 'react'
import { Link as Li} from 'react-router-dom';
import {Link} from "react-scroll";
import styles from './Navbar.module.scss';
import { useGlobalContext } from '../../context';
import Fleshed from '../Fleshed/Fleshed';
import UseWindowSize from '../../Hooks/UseWindowSize';

function Navbar() {

  const {showNav,fleshedNav,setFleshedNav} = useGlobalContext();

  useEffect(() => {},[showNav,fleshedNav])

  const addFleshed = () => {
    if(setFleshedNav) setFleshedNav(!fleshedNav);
  }


  const [height,width] = UseWindowSize();
  if(width > 1200 && setFleshedNav) setFleshedNav(false); 
  
  
  return (
    <header className={styles.navbar}>
      <Li className={styles.navbar__logo} to="/">My<span>Food</span></Li>
      
      <Fleshed showNav={showNav} fleshed={false}/>
       <div  className={`${showNav ? styles.hamburger : styles.hidden}`} onClick={() => addFleshed()}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
      {fleshedNav  && <Fleshed showNav={showNav} fleshed={true} setFleshedNav={setFleshedNav}/>}
    </header>
  )
}

export default Navbar