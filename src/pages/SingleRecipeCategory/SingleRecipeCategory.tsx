import React, { useEffect } from 'react'
import styles from './SingleRecipeCategory.module.scss'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context';
import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
function SingleRecipeCategory() {
 
  const { category } = useParams<{category?: string}>();
    const {getCategoryMeals,singleCategoryMeal,sorted,setShowNav,loading,validateCategory,
    validRoute
    } = useGlobalContext();

    const dispayError = () => {
      return <Error />
    }

    useEffect(() => {
      if(setShowNav) setShowNav(false);
      if(getCategoryMeals && category && validateCategory ){
        validateCategory(category);
      }
    },[])

    useEffect(() => {
      
    },[sorted,loading,validRoute])

    if(!validRoute) return <Error />


    if(loading) return <Loading />
    
    

  return (
    <section className={styles.singleRecipeCategory}>
      <Filter categoryName={category}/>
      {singleCategoryMeal && <Gallery meals={sorted ? sorted : singleCategoryMeal} category={category}/>}

    </section>
  )
}

export default SingleRecipeCategory