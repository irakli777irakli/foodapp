import React from 'react'
import styles from './DetailBottom.module.scss'

interface props{
  instruction: string
}


function DetailBottom({instruction}:props) {
  return (
    <div className={styles.DetailBottom}>
      <p className={styles.DetailBottom__instruction}>{instruction}</p>
    </div>
  )
}

export default DetailBottom