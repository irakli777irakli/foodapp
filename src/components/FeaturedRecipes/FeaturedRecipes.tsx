import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context'
import styles from './FeaturedRecipes.module.scss'
import Heading from '../Heading/Heading';

function FeaturedRecipes() {

  const {featured} = useGlobalContext(); 




  return (
    <section id='featured' className={styles.featuredRecipes}>
     
        <Heading content='Featured Meals' size={"medium"} color='graysh'/>
      
      <div className={styles.featuredRecipes__featured}>
        {featured && featured.map((x) => {
          const {idMeal,strMeal,strMealThumb} = x;
          return <div key={idMeal} className={styles.featuredRecipes__featured__item}>
            <Link to={`/featured/${idMeal}`} className={styles.featuredRecipes__featured__item__link}>
              <img src={strMealThumb} alt={strMeal} className={styles.featuredRecipes__featured__item__link__img}/>
            </Link>
            

          </div>
          
        })
        }
      </div>
    </section>
  )
}

export default FeaturedRecipes