import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { intro } from '../../../_types/contextTypes'
import styles from './Gallery.module.scss'
import Btn from '../../../components/Btn/Btn';

interface props {
  meals: intro[] ;
  category: string | undefined
}


function Gallery({meals,category}:props) {
  
  const [circulating,setCirculating] = useState<number>(
    meals.length >=10 ? Math.floor(meals.length / 10) : Math.ceil(meals.length / 10)
    )
  const [Load,setLoad] = useState(true);
 
  useEffect(() => {
    setCirculating(meals.length >=10 ? Math.floor(meals.length / 10) : Math.ceil(meals.length / 10))
  },[meals])
 

  const addCirculation = () => {
    const mealLength = meals.length;
    
    if(mealLength >= circulating && mealLength >= 10){
      setCirculating(circulating + Math.floor(meals.length / 10))

    }
    else{
      setCirculating(circulating + Math.ceil(meals.length / 10))
      
    }
    
    if(mealLength === circulating) setLoad(false);
  }

  return (
    
  <div className={styles.gallery}>
    {meals.slice(0,circulating).map((x) => {
      const {idMeal,strMeal,strMealThumb} = x;
      return (
        <Link key={idMeal} to={`/${category}/${idMeal}`} className={styles.gallery__item}>
        <img src={strMealThumb} alt={strMeal} loading="lazy" className={styles.gallery__item__img}/>
        <h4 className={styles.gallery__item__name}>{strMeal}</h4>
        </Link>
      )
    })}
    {Load && <button className={styles.gallery__load} onClick={() => addCirculation()}>Load</button>}
  </div>
  )
}

export default Gallery