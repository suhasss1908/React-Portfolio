import React,{ useState } from 'react'
import styles from './Navbar.module.css'
import closeIcon from "/src/assests/nav/closeIcon.png"
import menuIcon from "/src/assests/nav/menuIcon.png"

export default function Navbar() {
  const[menuOpen,setMenuOpen] =useState(false);
  return (
    <div>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? {closeIcon}
              : {menuIcon}
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
          </div>
      </nav>
    </div>
  )
}
