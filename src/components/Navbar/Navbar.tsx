import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link className={styles.navbar__logo} to="/">My<span>Food</span></Link>
      
      <nav className={styles.navbar__navigation}>
        <ul>
          <li><Link className={styles.navbar__navigation__link} to="#">Home</Link></li>
          <li><Link className={styles.navbar__navigation__link} to="#">Recipes</Link></li>
          <li><Link className={styles.navbar__navigation__link} to="#">Featured</Link></li>
          <li><Link className={styles.navbar__navigation__link} to="#">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar