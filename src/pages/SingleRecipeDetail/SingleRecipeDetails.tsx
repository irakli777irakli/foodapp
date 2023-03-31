import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './SingleRecipeDetails.module.scss'


function SingleRecipeDetails() {
  const {category,id} = useParams<{category?:string,id?:string}>()

  // add fetching stuff


  return (
    <div>SingleRecipeDetails</div>
  )
}

export default SingleRecipeDetails