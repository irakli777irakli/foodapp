import React from 'react'
import styles from "./Heading.module.scss"

interface props{
    content: string;
    size:string;
    color:string;
    isGridItem?: boolean
}

function Heading({content,size,color,isGridItem}:props) {
  return (
    <h1 className={`${styles.heading} ${styles[size]} ${styles[color]} ${isGridItem ? styles.griddy : null}`}>
      {content}
      </h1>

  )
}

export default Heading