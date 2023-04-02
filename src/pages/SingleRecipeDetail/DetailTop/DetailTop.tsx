import React from 'react'
import styles from './DetailTop.module.scss'
import { Meal } from '../../../_types/contextTypes'

interface props{
  details: Meal
}

function DetailTop({details}:props) {
  return (
    <div className={styles.top}>
      <div className={styles.top__imgContent}>
        <img src={details.strMealThumb} alt={details.idMeal} loading='lazy'/>
        <div className={styles.top__imgContent__description}>
          <h4>{details.strMeal}</h4>
          <span>{details.strArea}</span>
          <span>{details.strCategory}</span>
        </div>
      </div>
      <div className={styles.top__ingredients}>
        <span>{details.strIngredient1}</span>
        <span>{details.strIngredient2}</span>
        <span>{details.strIngredient3}</span>
        <span>{details.strIngredient4}</span>
        <span>{details.strIngredient5}</span>
        <span>{details.strIngredient6}</span>
        <span>{details.strIngredient7}</span>
        <span>{details.strIngredient8}</span>
        <span>{details.strIngredient9}</span>
        <span>{details.strIngredient10}</span>

      </div>
      <div className={styles.top__sizes}>
        <span>{details.strMeasure1}</span>
        <span>{details.strMeasure2}</span>
        <span>{details.strMeasure3}</span>
        <span>{details.strMeasure4}</span>
        <span>{details.strMeasure5}</span>
      </div>



    </div>
  )
}

export default DetailTop