import React from 'react'
import styles from "./Card.module.scss"
import { intro } from '../../_types/contextTypes'

interface props{
    prop: intro,
    pos: number
}


function Card({prop,pos}:props) {



  return (
    <div className={`${styles.card} ${pos === 1 ? styles.first : styles.last}`}>
          <img src={prop.strMealThumb} alt={prop.strMeal} className={styles.card__img}/>
          <div className={styles.card__content}>
            <h4>{prop.strMeal}</h4>
          </div>
        </div>
  )
}

export default Card