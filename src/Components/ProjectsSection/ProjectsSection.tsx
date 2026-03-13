import { projectsData } from "../../data/projectsData"

import type { SkillType } from "../../types/types"

import skillsData from "@/data/skills.json"

import styles from "./ProjectsSection.module.css"


import ProjectCard from "../ProjectCard/ProjectCard"

import { Dialog } from "@base-ui/react/dialog";
import OutsideScrollDialog from "../OutsideScrollingModal/OutsideScrollingModal"
import { useState } from "react";
import type { ProjectsData } from "../../types/projectTypes";

import ImageContainer from "../ImageContainer/ImageContainer";

import { Globe } from 'lucide-react';
import { ChevronsLeftRightEllipsis } from 'lucide-react';
import { Link } from 'lucide-react';




const skills: SkillType[] = skillsData.skillsMap

const handleProjectDetailsDialog = Dialog.createHandle();


export default function ProjectsSection() {

    const [activeProject, setActiveProject] = useState<null | ProjectsData>(null);

    return (
        <section id="projects" className={`content-container-width content-container-padding ${styles.sectionContainer}`}>
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





                        {activeProject?.relatedSkillsUID &&
                            <div>
                                {/* mappa igenom aktiva prohejtets relaterade skills ssom är u uid-format */}
                                <div className={styles.skillsContainer}>
                                    {activeProject.relatedSkillsUID.map((relatedskillUID, i) => (

                                        // för varje skill kollar vi om den finns reggad i kompletta öistan över skills.om den finns så renderar vi den:
                                        skills.find((skill) => relatedskillUID == skill.uid)) && (


                                            <div key={i} className={styles.skill}>
                                                <img className={styles.skillicon} src={`${skills.find((skill) => relatedskillUID == skill.uid)?.imgSrc}`} alt="" />
                                                <div>{skills.find((skill) => relatedskillUID == skill.uid)?.title} </div>
                                            </div>
                                        )
                                    )}
                                </div>

                            </div>
                        }


                        <div className={styles.iconButtonGroup}>
                            {activeProject?.deployLink && <button
                                className={`btn-primary ${styles.iconButton}`}
                                onClick={() => window.open(`${activeProject.deployLink}`, "_blank")}
                            >
                                <Globe />PRODUKTION
                            </button>}

                            {activeProject?.repoLink && <button
                                className={`btn-primary ${styles.iconButton}`}
                                onClick={() => window.open(`${activeProject.repoLink}`, "_blank")}
                            >
                                <ChevronsLeftRightEllipsis />KOD
                            </button>}
                        </div>

                        {activeProject?.links &&
                            <div className={styles.linksContainer}>
                                {activeProject.links.map((link, i) =>
                                    <a key={i}
                                        className={styles.link}
                                        href={link.link}
                                    >
                                        <Link className={styles.linkIcon} />
                                        {link.linkTitle}
                                    </a>)}
                            </div>
                        }
                        <section className={`${styles.imageSection}`}>
                            {/* bilder här */}

                            {/* om inga andra bilder finns så visas cover image.  */}
                            {!activeProject?.images && (
                                <div className={`${styles.imageContainer}`}>
                                    <a href={activeProject?.coverImage as string} target="_blank">
                                        <ImageContainer src={activeProject?.coverImage as string} alt={""} borderRadius={"small"} />
                                    </a>
                                </div>)}
                            {/* om andra bilder finns så visas dom istället för cover image. Vill jag även visa cover image behöver den listas även i denna array  */}
                            {activeProject?.images && (activeProject?.images.map((image, i) => (
                                <div key={i} className={`${styles.imageContainer}`}>
                                    <a href={image as string} target="_blank">
                                        <ImageContainer src={image as string} alt={""} borderRadius={"small"} />
                                    </a>

                                </div>)
                            ))}
                        </section>



                        {activeProject?.informationTextHTML &&
                            <div className={styles.informatioTextHTMLContainer}>
                                {activeProject.informationTextHTML}</div>}
                    </div>
                } >

            </OutsideScrollDialog >


        </section >

    )
}
