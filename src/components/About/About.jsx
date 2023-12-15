import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <div className={styles.container}>
        <p className={styles.title}>About</p>
        <div className={styles.content}>
          <img className={styles.heroIg} src={getImageUrl("hero/about.jpg")} alt = "Ashutosh"/>
          <div className={styles.aboutSection}>
            <div className={styles.aboutDIV}>
              <h3>FrontEnd</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, odio impedit tempore quas expedita facilis similique vel nobis inventore? Doloremque necessitatibus porro consequuntur, provident repudiandae amet sapiente id consequatur quia.</p>
            </div>
            <div className={styles.aboutDIV}><h3>FrontEnd</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, odio impedit tempore quas expedita facilis similique vel nobis inventore? Doloremque necessitatibus porro consequuntur, provident repudiandae amet sapiente id consequatur quia.</p></div>
            <div className={styles.aboutDIV}><h3>FrontEnd</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, odio impedit tempore quas expedita facilis similique vel nobis inventore? Doloremque necessitatibus porro consequuntur, provident repudiandae amet sapiente id consequatur quia.</p></div>
          </div>
        </div>
    </div>

  )
}
