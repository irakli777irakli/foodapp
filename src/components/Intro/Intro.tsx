import React from 'react'
import styles from './Intro.module.scss'

function Intro() {
  return (
    <section className={styles.intro}>

      <div className={styles.intro__left}>
        <h1 className={styles.intro__left__heading}>Let's Start cooking with popular recipes</h1>
        <span>Want to learn cook but confused how to start?</span>
        <span>No need to worry again</span>
        <div className={styles.intro__left__btns}>
          <button className={styles.intro__left__btns__btn}>get started</button>
          <button className={styles.intro__left__btns__btn}>Expore menu</button>
        </div>
      </div>

      <div className={styles.intro__right}>
        <img src='/introfood.webp' alt='food' className={styles.intro__right__img}/>

        <div className={styles.card}>
          <img src='/introfood.webp' alt='food' className={styles.card__img}/>
          <div className={styles.card__content}>
            <h4>the product</h4>
            <span>I really like this product</span>
          </div>
        </div>
      </div>




    </section>
  )
}

export default Intro