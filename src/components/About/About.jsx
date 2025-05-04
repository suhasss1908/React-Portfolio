import React from 'react'
import styles from './About.module.css'
import aboutImage from '/src/assests/about/aboutImage.png'
import cursorIcon from '/src/assests/about/cursorIcon.png'
import serverIcon from '/src/assests/about/serverIcon.png'

export default function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={aboutImage} alt="Me sitting with a laptop" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={cursorIcon} alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a Frontend Developer with experience in building responsive and optimized sites
                        </p>
                    </div>
                </li >
                
                <li className={styles.aboutItem}>
                    <img src={serverIcon} alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Machine Learning Enthusiast</h3>
                        <p>
                        Proficient in Machine Learning and Data Mining, with hands-on experience in developing and testing predictive models.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={serverIcon} alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Java GUI Developer</h3>
                        <p>
                        Proficient in Java Swing and AWT, with experience in building event-driven desktop applications.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
