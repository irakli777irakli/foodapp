import React from 'react'
import styles from './Error.module.scss'
import Btn from '../Btn/Btn'
import { Link } from 'react-router-dom'
import Heading from '../Heading/Heading'

function Error() {
  return (
    <section className={styles.errorpage}>
        <div className={styles.errorpage__wrapper}>
            <Heading content='Content was not found' color='orange' size='medium'/>
            <Link to="/"><Btn content='Go back home' look='primarygreen' /></Link>
        </div>
    </section>

    )
}

export default Error