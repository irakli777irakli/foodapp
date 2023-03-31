import React from 'react'
import { Link } from 'react-router-dom';
import styles from './RecipeCategories.module.scss'


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
    <section className={styles.recipeCategories}>
      <div>
        <h1>Search through top categories</h1>
      </div>
      {categories && categories.map((x,i) => {
        const {img,name,category} = x;
        return <div key={i} className={styles.recipeCategories__category__1}>
          <Link to={`/${category}`}>
        <img src={img} alt='food' loading='lazy'/>
        <h4>{name}</h4>
        </Link>
      </div>
      })}
      
      
    </section>
  )
}

export default RecipeCategories