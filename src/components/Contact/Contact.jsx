import React from 'react'
import styles from "./Contact.module.css"
import emailIcon from "/src/assests/contact/emailIcon.png"
import linkedinIcon from "/src/assests/contact/linkedinIcon.png"
import githubIcon from "/src/assests/contact/githubIcon.png"

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>  
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={emailIcon} alt="Email Icon" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=saisuhaskandukuri.1908@gmail.com">saisuhaskandukuri.1908@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={linkedinIcon} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/kandukoori-sai-suhas-2693a9257/">linkedin.com/in/kandukoori-sai-suhas</a>
            </li>
            <li className={styles.link}>
                <img src={githubIcon} alt="Github Icon" />
                <a href="https://github.com/suhasss1908">github.com/suhasss1908</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
