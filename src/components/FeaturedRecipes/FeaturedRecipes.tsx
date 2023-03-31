import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context'
import styles from './FeaturedRecipes.module.scss'

function FeaturedRecipes() {

  const {featured} = useGlobalContext(); 




  return (
    <section className={styles.featured}>
      {featured && featured.map((x) => {
        const {idMeal,strMeal,strMealThumb} = x;
        return <div key={idMeal} className={styles.featured__item}>
          <Link to="#" className={styles.featured__item__link}>
            <img src={strMealThumb} alt={strMeal} className={styles.featured__item__link__img}/>
          </Link>
          

        </div>
      })}
    </section>
  )
}

export default FeaturedRecipes