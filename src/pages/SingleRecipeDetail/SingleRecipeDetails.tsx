import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './SingleRecipeDetails.module.scss'
import { Meal } from '../../_types/contextTypes'
import DetailTop from './DetailTop/DetailTop'
import DetailBottom from './DetailBottom/DetailBottom'
import { useGlobalContext } from '../../context'


function SingleRecipeDetails() {

  const {setShowNav} = useGlobalContext()

  const {category,id} = useParams<{category?:string,id?:string}>()

  const [detail,setDetail] = useState<Meal[]>();

  // add fetching stuff
  const getDeatials = () => {
      const lcdetailedMeal = localStorage.getItem("singleMeal");

      if(lcdetailedMeal){
        const data:Meal[] = JSON.parse(lcdetailedMeal)
        if(data[0].idMeal === id){
          setDetail(data);
          return;
        }
      }
      
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => data.meals)
      .then((detailedMeal:Meal[]) => 
      {
        setDetail(detailedMeal);
        localStorage.setItem("singleMeal",JSON.stringify(detailedMeal));
      });
  }

  useEffect(()=>{
    if(setShowNav) setShowNav(false);

    if(id)
      getDeatials()
  },[])


  return (
    <section className={styles.mealDetail}>
      {detail && detail.map((x)=> {
        const {strInstructions} = x;
        return <>
        <DetailTop details={x}/>
        <DetailBottom instruction={strInstructions}/> 
        </>
      })}
    </section>
  )
}

export default SingleRecipeDetails