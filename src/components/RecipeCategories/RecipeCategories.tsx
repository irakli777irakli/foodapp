import React from 'react'
import { Link } from 'react-router-dom';
import styles from './RecipeCategories.module.scss'
import Heading from '../Heading/Heading';


const categories = [
  {
    name: "Meat and Fat",
    img:"https://www.themealdb.com/images/category/beef.png",
    category: "meat"
  },
  {
    name: "Vegetables",
    img:"https://www.themealdb.com/images/category/vegan.png",
    category: "vegie"
  },
  {
    name: "SeaFood",
    img:"https://www.themealdb.com/images/category/seafood.png",
    category: "fish"
  },
]

function RecipeCategories() {

  
  return (
    <section id='recipecategories' className={styles.recipeCategories}>
      <Heading content={"Search through top categories"} size='medium' color='orange' isGridItem={true}/>
      {categories && categories.map((x,i) => {
        const {img,name,category} = x;
        return (
              <Link key={i} to={`/${category}`} 
              className={`${styles.recipeCategories__category} ${styles[category]}`}>
                <img src={img} alt='food' loading='lazy'/>
                <h4>{name}</h4>
            </Link>
        )
      })}
      
      
    </section>
  )
}

export default RecipeCategories