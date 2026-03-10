import { projectsData } from "../../data/projectsData"

import styles from "./ProjectsSection.module.css"

import ProjectCard from "../ProjectCard/ProjectCard"

export default function ProjectsSection() {
    return (
        <section className={`content-container-width content-container-padding ${styles.sectionContainer}`}>
            <h2 className={`headding-loud`}>GREJER JAG GJORT</h2>

            <div className={`${styles.cardsContainer}`}>
                {projectsData.map((project, i) => (<div key={i}>


                    <ProjectCard project={project} />


                </div>
                ))}
            </div>




        </section>

    )
}
