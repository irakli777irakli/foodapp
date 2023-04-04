import React, { useEffect } from 'react'
import styles from './SingleRecipeCategory.module.scss'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context';
import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import Loading from '../../components/Loading/Loading';
function SingleRecipeCategory() {
 
  const { category } = useParams<{category?: string}>();
    const {getCategoryMeals,singleCategoryMeal,sorted,setShowNav} = useGlobalContext();

    useEffect(() => {
      if(setShowNav) setShowNav(false);

      if(getCategoryMeals && category ){
        getCategoryMeals(category);
      }
    },[])

    useEffect(() => {
      
    },[sorted])

    if(!singleCategoryMeal) return <h1>Loading</h1>

  return (
    <section className={styles.singleRecipeCategory}>
      <Filter categoryName={category}/>
      <Gallery meals={sorted ? sorted : singleCategoryMeal} category={category}/>

    </section>
  )
}

export default SingleRecipeCategory