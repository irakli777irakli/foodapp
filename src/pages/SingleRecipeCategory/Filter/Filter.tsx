import React from 'react'
import styles from './Filter.module.scss'
import { useGlobalContext } from '../../../context'

function Filter() {


  const {sortCategory} = useGlobalContext();

  const getSortedMeals = (name:string) => {
    if(sortCategory){
      sortCategory(name);
    }
  }


  return (
    <form className={styles.filter}>
      <label className={styles.filter__heading}  htmlFor='name'>Search By Name</label>
      <input className={styles.filter__input} type="text" placeholder='Food Name' onChange={(e) => getSortedMeals(e.target.value)}/>
    </form>
  )
}

export default Filter