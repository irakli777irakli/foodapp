import React from 'react'
import styles from './Footer.module.scss'
import Btn from '../Btn/Btn'
function Footer() {
  return (
    <footer id='footer' className={styles.footer}>
      <img src='/footerfood.webp' alt='img' className={styles.footer__img}/>
      <div className={styles.footer__content}>
        <h1 className={styles.footer__content__heading}>Subscribe to get weekly recipe updates</h1>
        <form className={styles.footer__mainForm}>
          <input type="text" placeholder='johnsmith.gamil.com' className={styles.footer__mainForm__input}/>
          <div className={styles.btn}>
            <Btn content='subscribe' look='primarygreen' />
          </div>
        </form>
      </div>


    </footer>
  )
}

export default Footer