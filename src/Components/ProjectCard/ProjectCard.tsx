
import type { ProjectsData } from "../../types/projectTypes"
import { ArrowRight } from 'lucide-react';
import styles from "./ProjectCard.module.css"

import ImageContainer
    from "../ImageContainer/ImageContainer";
type Props = {
    project: ProjectsData
}

export default function ProjectCard({ project }: Props) {
    return (<div role="button" className={`${styles.projectCard}`}>



        <div className={`${styles.informationContainer}`}>
            <h3 className={`${styles.heading}`}>{project.title}</h3>

            <p className={`${styles.textChunk}`}>{project.summary}</p>

            <div className={`${styles.callToAction}`}>
                <span>Se mer</span> <ArrowRight className={`${styles.arrow}`} /></div>
        </div>

        <div className={`${styles.coverImage}`}>
            {project.coverImage && <ImageContainer src={project.coverImage} alt={""} borderRadius={"small"} height="100%" aspectRatio="4/3" />
            }
        </div>


    </div>
    )
}
