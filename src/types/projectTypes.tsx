import type { ReactNode } from "react"

type ProjectLabel =
    | "Work in progress"
    | "Vilande (W.i.p.)"
    | "EXAMENSARBETE"

type ProjectForm =
    | "Grupp"
    | "Solo"

type ProjectContext =
    | "Jobb"
    | "Skoluppgift"
    | "Sidoprojekt"
    | "Personligt projekt"

type ProjectLink = {
    linkTitle: string,
    link: string,
}

export type ProjectsData = {
    title: string,
    summary: string,
    deployLink: string | null,
    repoLink: string | null,
    links: ProjectLink[] | null,
    label: ProjectLabel[] | null,
    projectForm: ProjectForm | null,
    projectContext: ProjectContext | null,
    relatedSkillsUID: string[] | null
    coverImage: string | null
    images: string[] | null,
    informationTextHTML: null | ReactNode,
}