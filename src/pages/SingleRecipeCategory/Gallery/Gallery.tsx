import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { intro } from '../../../_types/contextTypes'
import styles from './Gallery.module.scss'

interface props {
  meals: intro[] ;
  category: string | undefined
}


function Gallery({meals,category}:props) {
  
  const [circulating,setCirculating] = useState<number>(Math.floor(meals.length / 10))
  const [Load,setLoad] = useState(true);
 
  useEffect(() => {
    setLoad(true)
  },[meals])
 



  const addCirculation = () => {
    if(circulating <= meals.length && circulating + Math.floor(meals.length / 10) < meals.length){
      setCirculating(circulating + Math.floor(meals.length / 10))

    }else{
      setCirculating(circulating + (meals.length - circulating))
      setLoad(false);
    }
  }

  return (
    
  <div className={styles.gallery}>
    {meals.slice(0,circulating).map((x) => {
      const {idMeal,strMeal,strMealThumb} = x;
      return <div key={idMeal} className={styles.gallery__item}>
        <Link to={`/${category}/${idMeal}`}>
        <img src={strMealThumb} alt={strMeal} loading="lazy" className={styles.gallery__item__img}/>
        <h4 className={styles.gallery__item__name}>{strMeal}</h4>
        </Link>
      </div>
    })}
    {Load && <button className={styles.gallery__load} onClick={() => addCirculation()}>Load</button>}
  </div>
  )
}

export default Gallery