import React from 'react'
import styles from './Loading.module.scss'
import Heading from '../Heading/Heading'


function Loading() {

    return (
      <div className={styles.loading}>
    <div className={styles.loader}>
    </div>
    </div>
  )
}

export default Loading