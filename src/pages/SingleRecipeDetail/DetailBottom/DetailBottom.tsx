import React from 'react'
import styles from './DetailBottom.module.scss'

interface props{
  instruction: string
}


function DetailBottom({instruction}:props) {
  return (
    <div>
      <p>{instruction}</p>
    </div>
  )
}

export default DetailBottom