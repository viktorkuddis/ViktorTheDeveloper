import { projectsData } from "../../data/projectsData"

import styles from "./ProjectsSection.module.css"

import ProjectCard from "../ProjectCard/ProjectCard"

import { Dialog } from "@base-ui/react/dialog";
import OutsideScrollDialog from "../OutsideScrollingModal/OutsideScrollingModal"
import { useState } from "react";
import type { ProjectsData } from "../../types/projectTypes";

import ImageContainer from "../ImageContainer/ImageContainer";

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


            <OutsideScrollDialog
                handle={handleProjectDetailsDialog}
                intro={undefined}
                title={activeProject?.title as string} bodyContent={
                    <div className={`${styles.modalContentContainer}`}>

                        <div className={styles.tagContainer}>
                            {activeProject?.label &&
                                <>
                                    {activeProject.label.map((label, i) => <div className={styles.tag} key={i}>{label}</div>)}
                                </>
                            }
                            {activeProject?.projectForm &&
                                <div className={styles.tag}>
                                    {activeProject.projectForm}
                                </div>
                            }


                            {activeProject?.projectContext &&
                                <div className={styles.tag}>
                                    {activeProject.projectContext}
                                </div>
                            }
                        </div>
                        <p>{activeProject?.summary}</p>


                        <section className={`${styles.imageSection}`}>
                            {/* bilder här */}

                            {/* om inga andra bilder finns så visas cover image.  */}
                            {!activeProject?.images && (
                                <div className={`${styles.imageContainer}`}>
                                    <ImageContainer src={activeProject?.coverImage as string} alt={""} borderRadius={"small"} />
                                </div>)}
                            {/* om andra bilder finns så visas dom istället för cover image. Vill jag även visa cover image behöver den listas även i denna array  */}
                            {activeProject?.images && (activeProject?.images.map((image, i) => (
                                <div className={`${styles.imageContainer}`}>
                                    <ImageContainer key={i} src={image as string} alt={""} borderRadius={"small"} />
                                </div>)
                            ))}
                        </section>

                        <button className={`btn-primary`}>Se i produktion</button>

                        {activeProject?.deployLink && <p>{activeProject.deployLink}</p>}
                        {activeProject?.repoLink && <p>{activeProject.repoLink}</p>}

                        {activeProject?.links &&
                            <div>
                                {activeProject.links.map((link, i) => <a key={i} href={link.link}>{link.linkTitle}</a>)}
                            </div>
                        }








                        {activeProject?.relatedSkillsUID &&
                            <div>
                                {activeProject.relatedSkillsUID.map((skill, i) => <div key={i}>{skill}</div>)}
                            </div>
                        }




                        {activeProject?.informationTextHTML && <div>{activeProject.informationTextHTML}</div>}
                    </div>
                } >

            </OutsideScrollDialog>


        </section >

    )
}
