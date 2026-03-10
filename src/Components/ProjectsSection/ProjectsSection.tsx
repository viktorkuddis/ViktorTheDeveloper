import { projectsData } from "../../data/projectsData"

import ProjectCard from "../ProjectCard/ProjectCard"

export default function ProjectsSection() {
    return (
        <section className="content-container-width content-container-padding">
            <h2 className={`headding-loud`}>GREJER JAG GJORT</h2>

            hej
            {projectsData.map((project, i) => (<div key={i}>

                <br />
                <ProjectCard project={project} />
                <br />

            </div>
            ))}


            <br />

            <br /><br /><br /><br /><br /><br /><br /><br />
        </section>

    )
}
