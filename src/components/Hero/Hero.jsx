import React from 'react'
import styles from './Hero.module.css'
import heroImg from "/src/assests/hero/heroImage.png"

export default function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Suhas</h1>
            <p className={styles.description}>
                I'm a Front-End Developer experienced in React JS.
                 Skilled in Data Mining and Machine Learning, including data preprocessing, model building, and evaluation.
                Reach out to me if you'd like to share your thoughts!
            </p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=saisuhaskandukuri.1908@gmail.com" className={styles.contactBtn}>Contact Me</a>
            
                
        </div>
        <img src={heroImg} alt="Him" className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>
  )
}
