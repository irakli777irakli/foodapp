import React from 'react'
import styles from './Footer.module.scss'
function Footer() {
  return (
    <footer className={styles.footer}>
      <img src='/footerfood.webp' alt='img' className={styles.footer__img}/>
      <div className={styles.footer__content}>
        <h1 className={styles.footer__content__heading}>Subscribe to get weekly recipe updates</h1>
        <form>
          <input type="text" placeholder='johnsmith.gamil.com' className={styles.footer__content__input}/>
        </form>
      </div>


    </footer>
  )
}

export default Footer