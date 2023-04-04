import React from 'react'
import styles from './Loading.module.scss'
import Heading from '../Heading/Heading'


function Loading() {

    return (
    <div className={styles.loading}>
        <span className={styles.loader}></span>
    </div>
  )
}

export default Loading