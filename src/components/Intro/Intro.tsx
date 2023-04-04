import React from 'react'
import styles from './Intro.module.scss'
import Btn from '../Btn/Btn'
import Card from '../Card/Card'
import { useGlobalContext } from '../../context'
import Heading from '../Heading/Heading'

function Intro() {

  const {introMeal} = useGlobalContext();


  return (
    <section id='intro' className={styles.intro}>

      <div className={styles.intro__left}>
        <Heading content={"Let's Start cooking with popular recipes"} size='huge' color='graysh'/>
        <span>Want to learn cook but confused how to start?</span>
        <span>No need to worry again</span>
        <div className={styles.intro__left__btns}>
          <Btn content={"get started"} look={"primarygreen"}/>
          <Btn content={"explore menu"} look={"outlinegreen"}/>
        </div>
      </div>

      <div className={styles.intro__right}>
        <img src='/introfood.webp' alt='food' className={styles.intro__right__img}/>
        {introMeal && introMeal.slice(0,2).map((x,i) => <Card key={x.idMeal} prop={x} pos={i}/>)}
        
      </div>




    </section>
  )
}

export default Intro