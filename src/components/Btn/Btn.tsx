import React from 'react'
import styles from "./Btn.module.scss"

interface props {
    content: string;
    look: string
}


function Btn({content,look}:props) {
  return (
    <button
     className={`${styles.btn} ${styles[look]} ${content === "subscribe" ? styles.inputBtn: null}`}>
      {content}
      </button>
  )
}

export default Btn