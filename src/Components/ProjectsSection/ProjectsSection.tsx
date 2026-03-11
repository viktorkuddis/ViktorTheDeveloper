import { projectsData } from "../../data/projectsData"

import styles from "./ProjectsSection.module.css"

import ProjectCard from "../ProjectCard/ProjectCard"

import { Dialog } from "@base-ui/react/dialog";
import OutsideScrollDialog from "../OutsideScrollingModal/OutsideScrollingModal"
import { useState } from "react";
import type { ProjectsData } from "../../types/projectTypes";

const handleProjectDetailsDialog = Dialog.createHandle();


export default function ProjectsSection() {

    const [activeProject, setActiveProject] = useState<null | ProjectsData>(null);

    return (
        <section className={`content-container-width content-container-padding ${styles.sectionContainer}`}>
            <h2 className={`headding-loud`}>GREJER JAG GJORT</h2>

            <div className={`${styles.cardsContainer}`}>
                {projectsData.map((project, i) => (<div key={i}>
                    <Dialog.Trigger handle={handleProjectDetailsDialog} id={i.toString()} payload={1} onClick={() => setActiveProject(project)} style={{ display: "contents" }} >
                        <ProjectCard project={project} />

                    </Dialog.Trigger>






                </div>
                ))}
            </div>



            <OutsideScrollDialog handle={handleProjectDetailsDialog} title={activeProject?.title as string} bodyContent={activeProject?.informationTextHTML} intro={undefined}>

            </OutsideScrollDialog>


        </section >

    )
}
