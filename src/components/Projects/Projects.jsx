import React from 'react'
import projects from "../../data/projects.json"
import styles from "./Projects.module.css"

export default function Projects() {
  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
               projects.map((project,id)=>{
                return (
                    <div key={id} className={styles.container1}>
                        <img src={project.imageSrc} alt={`Image of ${project.title}`} className={styles.image} />
                        <h3 className={styles.title1}>{project.title}</h3>
                        <p className={styles.description1}>{project.description}</p>
                        <ul className={styles.skills}>
                            {project.skills.map((skill,id)=>{
                                <li key={id} className={styles.skill}>{skill}</li>
                            })}
                        </ul>
                        <div className={styles.links}>
                            <a href={project.Demo} className={styles.link}>Demo</a>
                            <a href={project.source} className={styles.link}>Source</a>
                        </div>
                    </div>
                );
               })}
        </div>
    </section>
  )
}

