import React from 'react'
import styles from "./Heading.module.scss"

interface props{
    content: string;
    size:string;
    color:string
}

function Heading({content,size,color}:props) {
  return (
    <h1 className={`${styles.heading} ${styles[size]} ${styles[color]}`}>{content}</h1>

  )
}

export default Heading