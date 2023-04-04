import React, { useEffect } from 'react'
import FeaturedRecipes from '../../components/FeaturedRecipes/FeaturedRecipes'
import Footer from '../../components/Footer/Footer'
import Intro from '../../components/Intro/Intro'
import RecipeCategories from '../../components/RecipeCategories/RecipeCategories'
import styles from './HomePage.module.scss'
import { useGlobalContext } from '../../context'

function HomePage() {


  const {setShowNav} = useGlobalContext();

  useEffect(() =>{
    if(setShowNav) setShowNav(true)
  },[])


  return (
    <main className={styles.homePage}>
      <Intro />
      <RecipeCategories />
      <FeaturedRecipes />
      <Footer />

    </main>
  )
}

export default HomePage