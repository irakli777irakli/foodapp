import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './SingleRecipeDetails.module.scss'
import { Meal } from '../../_types/contextTypes'
import DetailTop from './DetailTop/DetailTop'
import DetailBottom from './DetailBottom/DetailBottom'
import { useGlobalContext } from '../../context'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'


function SingleRecipeDetails() {

  const {setShowNav} = useGlobalContext()

  const {category,id} = useParams<{category?:string,id?:string}>()

  const [detail,setDetail] = useState<Meal[]>([]);
  const [loading,setLoading] =  useState<boolean>(false);
  const [valid,setValid] = useState<boolean>(true);


  // add fetching stuff
  const getDeatials = async () => {
      const lcdetailedMeal = localStorage.getItem("singleMeal");
      
      setLoading(true);


      if(lcdetailedMeal){
        let data:Meal[] = await JSON.parse(lcdetailedMeal);
         if(data !== null){
         
          if(data[0].idMeal === id){
          setDetail(data);
          setLoading(false)
          return;
        }
      }
      }

      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
     
        const data = await res.json();
        if(!data.meals) {
          setValid(false)
          return;
        }

        const detailedMeal: Meal[] = data.meals;
        setDetail(detailedMeal);
        localStorage.setItem("singleMeal",JSON.stringify(detailedMeal));
        setLoading(false);
        return;
      
  }

  useEffect(()=>{
    if(setShowNav) setShowNav(false);
    if(id){
      getDeatials()
    }
    
  },[])

  if(!valid) return <Error />


  if(loading) return <Loading />


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