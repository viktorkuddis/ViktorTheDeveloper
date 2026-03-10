
import type { ProjectsData } from "../../types/projectTypes"
import { ArrowRight } from 'lucide-react';
import styles from "./ProjectCard.module.css"

import ImageContainer
    from "../ImageContainer/ImageContainer";
type Props = {
    project: ProjectsData
}

export default function ProjectCard({ project }: Props) {
    return (
        <div className={`${styles.projectCardCONTAINER}`}>


            <div role="button" className={`${styles.projectCard}`}>






                <div className={`${styles.informationContainer}`}>


                    <div>

                        <h3 className={`${styles.heading}`}>{project.title}</h3>

                    </div>


                    <div>
                        <p className={`${styles.textChunk}`}>{project.summary}</p>
                        {(project.projectContext || project.projectForm) && (
                            <>


                                {project.projectContext && <span className={`${styles.tag}`}>{project.projectContext}</span>}
                                {project.projectForm && <span className={`${styles.tag}`}>{project.projectForm}</span>}
                                {project.label &&
                                    project.label.map((l, i) => <span key={i} className={`${styles.tag}`}> {l}</span>)}

                            </>
                        )}
                    </div>


                    <div className={`${styles.callToAction}`}>
                        <span>Se mer</span> <ArrowRight className={`${styles.arrow}`} /></div>
                </div>
                {project.coverImage &&
                    <div className={`${styles.coverImage}`}>
                        <ImageContainer src={project.coverImage} alt={""} width="100%" borderRadius={"small"} height="100%" />

                    </div>}


            </div>
        </div >
    )
}
