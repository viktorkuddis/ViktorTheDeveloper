
import type { ProjectsData } from "../../types/projectTypes"
import { ArrowRight } from 'lucide-react';
import styles from "./ProjectCard.module.css"

import skillsData from "@/data/skills.json"


import ImageContainer from "../ImageContainer/ImageContainer";
import type { SkillType } from "../../types/types";
type Props = {
    project: ProjectsData
}

const skills: SkillType[] = skillsData.skillsMap

export default function ProjectCard({ project }: Props) {
    return (
        // Denna container finns för att kunna utnytja container query i css för själva kortet.
        <article className={`${styles.projectCardCONTAINER}`}>

            <div role="button" className={`${styles.projectCard}`}>

                <div className={`${styles.informationContainer}`}>
                    <div>
                        <h3 className={`${styles.heading}`}>{project.title}</h3>
                    </div>
                    {(project.projectContext || project.projectForm) && (
                        <div className={styles.tagsContainer}>

                            {project.projectContext && <span className={`${styles.tag}`}>{project.projectContext}</span>}
                            {project.projectForm && <span className={`${styles.tag}`}>{project.projectForm}</span>}
                            {project.label &&
                                project.label.map((l, i) => <span key={i} className={`${styles.tag}`}> {l}</span>)}
                        </div>
                    )}
                    <div>
                        <p className={`${styles.textChunk}`}>
                            {project.summary}
                        </p>

                    </div>

                    {project?.relatedSkillsUID &&
                        <div className={styles.skillsContainer}>
                            {/* mappa igenom projektets relaterade skills som är i uid-format */}
                            {project.relatedSkillsUID.map((relatedskillUID, i) => (

                                // för varje skill kollar vi om den finns reggad i kompletta öistan över skills. om den finns så renderar vi den:
                                skills.find((skill) => relatedskillUID == skill.uid)) && (

                                    <img key={i} className={styles.skillicon} src={`${skills.find((skill) => relatedskillUID == skill.uid)?.imgSrc}`} alt="" />

                                )
                            )}
                        </div>


                    }

                    <div className={`${styles.callToAction}`}>
                        <span>Se mer</span> <ArrowRight className={`${styles.arrow}`} />
                    </div>
                </div>

                {project.coverImage &&
                    <div className={`${styles.coverImage}`}>
                        <ImageContainer src={project.coverImage} alt={""} width="100%" borderRadius={"small"} height="100%" />
                    </div>}

            </div>

        </article >
    )
}
