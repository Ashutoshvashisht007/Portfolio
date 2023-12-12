import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            Hi, I'm Ashutosh
        </h1>
        <p className={styles.description}>
            I'm a MERN stack developer and I have created multiple projects using MERN stack.
        </p>
        <a className={styles.contactBtn} href='mailto:ashutoshanandsharma@gmail.com'>Contact Me</a>
    </div>
    <img className={styles.heroIg} src={getImageUrl("hero/ashutosh.jpg")} alt = "Ashutosh"/>
    <div className={styles.topBar}></div>
    <div className={styles.bottomBar}></div>
  </section>
}
