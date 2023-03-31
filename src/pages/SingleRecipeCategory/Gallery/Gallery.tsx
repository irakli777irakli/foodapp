import React from 'react'
import { Link } from 'react-router-dom'
import { intro } from '../../../_types/contextTypes'
import styles from './Gallery.module.scss'

interface props {
  meals: intro[] | undefined;
  category: string | undefined
}


function Gallery({meals,category}:props) {
  return (
  <div className={styles.gallery}>
    {meals?.map((x) => {
      const {idMeal,strMeal,strMealThumb} = x;
      return <div key={idMeal} className={styles.gallery__item}>
        <Link to={`/${category}/${idMeal}`}>
        <img src={strMealThumb} alt={strMeal} loading="lazy" className={styles.gallery__item__img}/>
        <h4 className={styles.gallery__item__name}>{strMeal}</h4>
        </Link>
      </div>
    })}
  </div>
  )
}

export default Gallery